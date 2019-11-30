import { Injectable, Inject } from '@angular/core';

@Injectable()
export class DocumentService {
  constructor(@Inject('Window') private readonly window: any) {}

  /*
   opens the path in a window and returns a promise that always resolves,
   it will resolve to true when the document successfully loads, and false if
   the document fails to load.
  */
  public downloadFile(path: string): Promise<boolean> {
    // This helps avoid crossdomain errors when watching a popup.
    path = path.charAt(0) === '/' ? path : `/${path}`;
    const { location } = this.window;
    const host = location.hostname;
    const protocol = location.protocol;
    const port = location.port;
    const url = port
      ? `${protocol}//${host}:${port}${path}`
      : `${protocol}//${host}${path}`;

    const docWindow = this.window.open(url);
    if (!docWindow) {
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      try {
        docWindow.addEventListener('load', resolve.bind(null, true));
        docWindow.addEventListener('error', resolve.bind(null, false));
      } catch (err) {
        // sometimes we get a crossorigin error despite being part of the same domain.
        resolve(false);
      }
    });
  }
}

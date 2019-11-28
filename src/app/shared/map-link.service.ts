import { Injectable, Inject } from '@angular/core';

@Injectable()
export class MapLinkService {
  constructor(@Inject('Navigator') private readonly navigator: Navigator) {}

  public getMapUri(address: string): string {
    const { platform } = this.navigator;
    let protocol: string;
    if (
      platform.indexOf('iPhone') !== -1 ||
      platform.indexOf('iPad') !== -1 ||
      platform.indexOf('iPod') !== -1
    ) {
      protocol = 'maps:';
    } else {
      protocol = 'https:';
    }

    return `${protocol}//maps.google.com/?q=${encodeURI(address)}`;
  }
}

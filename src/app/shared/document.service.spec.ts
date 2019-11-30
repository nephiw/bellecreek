import { DocumentService } from './document.service';
import { fakeAsync, flushMicrotasks } from '@angular/core/testing';

describe('DocumentService', () => {
  let service: DocumentService;
  let mockWindow: Partial<Window>;
  let openSpy: jasmine.Spy;

  beforeEach(() => {
    openSpy = jasmine.createSpy('open');
    mockWindow = {
      open: jasmine.createSpy(),
      location: {
        hostname: 'example.com',
        protocol: 'https:',
        port: ''
      } as Location
    };
    service = new DocumentService(mockWindow);
  });

  it('includes the port if it exists', () => {
    mockWindow.location.port = '4300';
    service.downloadFile('/assets/document.pdf').then(openSpy);
    expect(mockWindow.open).toHaveBeenCalledWith('https://example.com:4300/assets/document.pdf');
  });

  it('does not need the leading slash', () => {
    service.downloadFile('assets/document.pdf').then(openSpy);
    expect(mockWindow.open).toHaveBeenCalledWith('https://example.com/assets/document.pdf');
  });

  it('does not include the port if it is not on location', () => {
    service.downloadFile('/assets/document.pdf').then(openSpy);
    expect(mockWindow.open).toHaveBeenCalledWith('https://example.com/assets/document.pdf');
  });

  it('resolves to false when the window fails to open', fakeAsync(() => {
    (mockWindow.open as any).and.returnValue(false);
    service.downloadFile('/assets/document.pdf').then(openSpy);
    flushMicrotasks();
    expect(openSpy).toHaveBeenCalledWith(false);
  }));

  it('resolves to false when the open throws an error', fakeAsync(() => {
    const returnWindow = jasmine.createSpyObj('Window', ['addEventListener']);
    returnWindow.addEventListener.and.callFake(() => { throw new Error('nope!'); });
    (mockWindow.open as any).and.returnValue(returnWindow);

    const catchSpy = jasmine.createSpy();
    service.downloadFile('/assets/document.pdf').then(openSpy).catch(catchSpy);
    flushMicrotasks();
    expect(openSpy).toHaveBeenCalledWith(false);
    expect(catchSpy).not.toHaveBeenCalled();
  }));

  describe('when the window properly opens', () => {
    let fnMap: any;
    let catchSpy: jasmine.Spy;

    beforeEach(() => {
      catchSpy = jasmine.createSpy('catch');
      const returnWindow = jasmine.createSpyObj('Window', ['addEventListener']);
      fnMap = {};
      returnWindow.addEventListener.and.callFake((event: string, fn: any) => {
        fnMap[event] = fn;
      });
      (mockWindow.open as any).and.returnValue(returnWindow);
    });

    it('resolves to false when the new window throws an error', fakeAsync(() => {
      service.downloadFile('/assets/document.pdf').then(openSpy).catch(catchSpy);
      flushMicrotasks();

      fnMap.error();
      flushMicrotasks();

      expect(openSpy).toHaveBeenCalledWith(false);
      expect(catchSpy).not.toHaveBeenCalled();
    }));

    it('resolves to true when the new window finished loading', fakeAsync(() => {
      service.downloadFile('/assets/document.pdf').then(openSpy).catch(catchSpy);
      flushMicrotasks();

      fnMap.load();
      flushMicrotasks();

      expect(openSpy).toHaveBeenCalledWith(true);
      expect(catchSpy).not.toHaveBeenCalled();
    }));
  });
});

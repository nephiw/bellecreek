import { MapLinkService } from './map-link.service';

describe('MapLinkService', () => {
  let service: MapLinkService;
  let mockWindow: any;

  beforeEach(() => {
    mockWindow = { navigator: { platform: '' } };
    service = new MapLinkService(mockWindow);
  });

  it('uses the maps protocol for iPad', () => {
    mockWindow.navigator.platform = 'iPad';
    expect(service.getMapUri('1600 Amphitheatre Parkway')).toBe(
      'maps://maps.google.com/?q=1600%20Amphitheatre%20Parkway'
    );
  });

  it('uses the maps protocol for iPhone', () => {
    mockWindow.navigator.platform = 'iPhone';
    expect(service.getMapUri('1600 Amphitheatre Parkway')).toBe(
      'maps://maps.google.com/?q=1600%20Amphitheatre%20Parkway'
    );
  });

  it('uses the maps protocol for iPod', () => {
    mockWindow.navigator.platform = 'iPod';
    expect(service.getMapUri('1600 Amphitheatre Parkway')).toBe(
      'maps://maps.google.com/?q=1600%20Amphitheatre%20Parkway'
    );
  });

  it('uses the https protocol for other things', () => {
    mockWindow.navigator.platform = 'Android';
    expect(service.getMapUri('1600 Amphitheatre Parkway')).toBe(
      'https://maps.google.com/?q=1600%20Amphitheatre%20Parkway'
    );
  });
});

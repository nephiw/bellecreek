import { TestBed } from '@angular/core/testing';

import { MapLinkService } from './map-link.service';

describe('MapLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapLinkService = TestBed.get(MapLinkService);
    expect(service).toBeTruthy();
  });
});

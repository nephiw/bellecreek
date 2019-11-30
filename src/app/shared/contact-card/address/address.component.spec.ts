import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';
import { Contact } from '../contact-card.component';
import { MapLinkService } from '@app/shared/map-link.service';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;
  let mapLinkService: jasmine.SpyObj<MapLinkService>;

  beforeEach(async(() => {
    mapLinkService = jasmine.createSpyObj('MapLinkService', ['getMapUri']);

    TestBed.configureTestingModule({
      declarations: [ AddressComponent ],
      providers: [{ provide: MapLinkService, useValue: mapLinkService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.contact = { address: [] } as unknown as Contact;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

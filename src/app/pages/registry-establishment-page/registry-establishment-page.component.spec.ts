import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryEstablishmentPageComponent } from './registry-establishment-page.component';

describe('RegistryEstablishmentPageComponent', () => {
  let component: RegistryEstablishmentPageComponent;
  let fixture: ComponentFixture<RegistryEstablishmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryEstablishmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryEstablishmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

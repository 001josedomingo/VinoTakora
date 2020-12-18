import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEstablishmentPageComponent } from './profile-establishment-page.component';

describe('ProfileEstablishmentPageComponent', () => {
  let component: ProfileEstablishmentPageComponent;
  let fixture: ComponentFixture<ProfileEstablishmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEstablishmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEstablishmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginestablishmentPageComponent } from './loginestablishment-page.component';

describe('LoginestablishmentPageComponent', () => {
  let component: LoginestablishmentPageComponent;
  let fixture: ComponentFixture<LoginestablishmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginestablishmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginestablishmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

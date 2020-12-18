import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuserPageComponent } from './loginuser-page.component';

describe('LoginuserPageComponent', () => {
  let component: LoginuserPageComponent;
  let fixture: ComponentFixture<LoginuserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginuserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

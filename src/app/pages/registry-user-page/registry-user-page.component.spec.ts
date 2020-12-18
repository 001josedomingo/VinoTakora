import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryUserPageComponent } from './registry-user-page.component';

describe('RegistryUserPageComponent', () => {
  let component: RegistryUserPageComponent;
  let fixture: ComponentFixture<RegistryUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryUserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

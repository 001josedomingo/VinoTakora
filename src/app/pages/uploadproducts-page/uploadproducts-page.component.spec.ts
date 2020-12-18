import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadproductsPageComponent } from './uploadproducts-page.component';

describe('UploadproductsPageComponent', () => {
  let component: UploadproductsPageComponent;
  let fixture: ComponentFixture<UploadproductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadproductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadproductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

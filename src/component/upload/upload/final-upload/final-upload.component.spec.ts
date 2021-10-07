import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalUploadComponent } from './final-upload.component';

describe('FinalUploadComponent', () => {
  let component: FinalUploadComponent;
  let fixture: ComponentFixture<FinalUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

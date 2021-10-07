import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioNavBarComponent } from './studio-nav-bar.component';

describe('StudioNavBarComponent', () => {
  let component: StudioNavBarComponent;
  let fixture: ComponentFixture<StudioNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

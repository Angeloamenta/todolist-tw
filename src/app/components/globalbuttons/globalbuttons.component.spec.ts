import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalbuttonsComponent } from './globalbuttons.component';

describe('GlobalbuttonsComponent', () => {
  let component: GlobalbuttonsComponent;
  let fixture: ComponentFixture<GlobalbuttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalbuttonsComponent]
    });
    fixture = TestBed.createComponent(GlobalbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

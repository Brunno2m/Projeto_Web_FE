import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandroverComponent } from './landrover.component';

describe('LandroverComponent', () => {
  let component: LandroverComponent;
  let fixture: ComponentFixture<LandroverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandroverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandroverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

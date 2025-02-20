import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondafitComponent } from './hondafit.component';

describe('HondafitComponent', () => {
  let component: HondafitComponent;
  let fixture: ComponentFixture<HondafitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HondafitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HondafitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

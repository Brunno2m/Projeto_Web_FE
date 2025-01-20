import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorollaComponent } from './corolla.component';

describe('CorollaComponent', () => {
  let component: CorollaComponent;
  let fixture: ComponentFixture<CorollaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorollaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcrossComponent } from './tcross.component';

describe('TcrossComponent', () => {
  let component: TcrossComponent;
  let fixture: ComponentFixture<TcrossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TcrossComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

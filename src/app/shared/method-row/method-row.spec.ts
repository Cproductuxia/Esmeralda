import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MethodRow } from './method-row';

describe('MethodRow', () => {
  let component: MethodRow;
  let fixture: ComponentFixture<MethodRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethodRow],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

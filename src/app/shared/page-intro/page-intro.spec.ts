import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageIntro } from './page-intro';

describe('PageIntro', () => {
  let component: PageIntro;
  let fixture: ComponentFixture<PageIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIntro],
    }).compileComponents();

    fixture = TestBed.createComponent(PageIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

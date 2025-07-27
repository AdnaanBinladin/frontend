import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusCards } from './status-cards';

describe('StatusCards', () => {
  let component: StatusCards;
  let fixture: ComponentFixture<StatusCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusCards]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusCards);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cards', () => {
    component.cards = [
      { title: 'Battery', subtitle: '12.6V', icon: '🔋', statusClass: 'normal' },
      { title: '2 Store', subtitle: 'with low stock', icon: '⚠', statusClass: 'low-stock' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.status-box').length).toBe(2);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertFeed, Alert } from './alert-feed';

describe('AlertFeed', () => {
  let component: AlertFeed;
  let fixture: ComponentFixture<AlertFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertFeed]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertFeed);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct icon and color', () => {
    component.alerts = [
      { type: 'low-battery', message: 'Low Battery – 11.4V', time: '10:32 AM' },
      { type: 'warning', message: 'East Side below threshold', time: '9:45 AM' },
      { type: 'normal', message: 'Battery normal again', time: 'Yesterday' }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.alert-row').length).toBe(3);
    expect(compiled.querySelector('.alert-icon.red').textContent.trim()).toBe('⚠');
    expect(compiled.querySelector('.alert-icon.yellow').textContent.trim()).toBe('⚠');
    expect(compiled.querySelector('.alert-icon.green').textContent.trim()).toBe('✅');
  });
});

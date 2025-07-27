import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowerMonitor } from './power-monitor';

describe('PowerMonitor', () => {
  let component: PowerMonitor;
  let fixture: ComponentFixture<PowerMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerMonitor]
    }).compileComponents();

    fixture = TestBed.createComponent(PowerMonitor);
    component = fixture.componentInstance;
    component.powerData = {
      batteryPercentage: 75,
      currentDraw: 1.2,
      solarInput: 5.0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct stroke-dasharray', () => {
    const stroke = component.calcStroke(75);
    expect(stroke).toMatch(/\d+ \d+/);
  });
});

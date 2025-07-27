import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryAlerts } from './inventory-alerts';

describe('InventoryAlerts', () => {
  let component: InventoryAlerts;
  let fixture: ComponentFixture<InventoryAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAlerts]
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryAlerts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle expandedStore correctly', () => {
    expect(component.expandedStore).toBeNull();
    component.toggleStore('Downtown');
    expect(component.expandedStore).toBe('Downtown');
    component.toggleStore('Downtown');
    expect(component.expandedStore).toBeNull();
    component.toggleStore('Central');
    expect(component.expandedStore).toBe('Central');
  });

  it('should correctly calculate total kg', () => {
    expect(component.getTotalKg('Downtown')).toBe(120);
    expect(component.getTotalKg('Central')).toBe(45);
  });
});

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

export interface PowerData {
  batteryPercentage: number;
  currentDraw: number;
  solarInput: number;
}

@Component({
  selector: 'app-power-monitor',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './power-monitor.html',
  styleUrls: ['./power-monitor.scss']
})
export class PowerMonitor {
  @Input() powerData!: PowerData;

  calcStroke(value: number): string {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / 100) * circumference;
    return `${progress} ${circumference}`;
  }

  onSeeAllProducts() {
    alert('Navigate to all products page');
    // Implement your navigation logic here if needed
  }
}

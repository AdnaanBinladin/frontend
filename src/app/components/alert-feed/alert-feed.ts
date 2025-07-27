import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Alert {
  type: 'low-battery' | 'warning' | 'normal' | string;
  message: string;
  time: string;
}

@Component({
  selector: 'app-alert-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-feed.html',
  styleUrls: ['./alert-feed.scss']
})
export class AlertFeed {
  @Input() alerts: Alert[] = [];

  getAlertColor(type: string) {
    switch(type) {
      case 'low-battery': return 'red';
      case 'warning': return 'yellow';
      case 'normal': return 'green';
      default: return '';
    }
  }

  getAlertIcon(type: string) {
    switch(type) {
      case 'low-battery':
      case 'warning': return '⚠';
      case 'normal': return '✅';
      default: return 'ℹ️';
    }
  }
}

import { Component } from '@angular/core';
import { StatusCards } from '../../components/status-cards/status-cards';
import { PowerMonitor } from '../../components/power-monitor/power-monitor';
import { InventoryAlerts } from '../../components/inventory-alerts/inventory-alerts';
import { AlertFeed } from '../../components/alert-feed/alert-feed';
import { QuickActions } from '../../components/quick-actions/quick-actions';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [
    StatusCards,
    PowerMonitor,
    InventoryAlerts,
    AlertFeed,
    QuickActions,
    BottomNav
  ]
})
export class Dashboard {}

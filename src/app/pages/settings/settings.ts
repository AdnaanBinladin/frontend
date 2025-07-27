import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-settings-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, NgIf, NgFor],
 templateUrl: './settings.html',
  styleUrls: ['./settings.scss']

})
export class Settings {
  settings = [
    { icon: 'inbox', label: 'General' },
    { icon: 'notifications_none', label: 'Notifications' },
    { icon: 'bolt', label: 'Solar Power' },
    { icon: 'battery_std', label: 'Battery' },
    { icon: 'category', label: 'Products' }
  ];
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatusCard {
  title: string;
  subtitle: string;
  icon: string;
  statusClass: string; // e.g., 'low-stock' or 'normal'
}

@Component({
  selector: 'app-status-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-cards.html',
  styleUrls: ['./status-cards.scss']
})
export class StatusCards {
  @Input() cards: StatusCard[] = [];
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

interface FishTransfer {
  fish: string;
  kg: number;
}

@Component({
  selector: 'app-inventory-alerts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule, MatListModule, MatButtonModule],
  templateUrl: './inventory-alerts.html',
  styleUrls: ['./inventory-alerts.scss']
})
export class InventoryAlerts implements OnInit {
  fishTransfers: Record<string, FishTransfer[]> = {};
  stores: string[] = [];
  expandedStore: string | null = null;

  loading = true;
  error: string | null = null;

  private apiUrl = 'https://localhost:7275/api/Inventory'; // Replace with your real backend URL

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFishTransfers();
  }

  fetchFishTransfers() {
    this.loading = true;
    this.error = null;
    this.http.get<Record<string, FishTransfer[]>>(this.apiUrl).subscribe({
      next: (data) => {
        this.fishTransfers = data;
        this.stores = Object.keys(data);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load inventory transfers.';
        this.loading = false;
        console.error('API error:', err);
      }
    });
  }

  toggleStore(storeName: string) {
    this.expandedStore = this.expandedStore === storeName ? null : storeName;
  }

  getTotalKg(storeName: string): number {
    const transfers = this.fishTransfers[storeName] || [];
    return transfers.reduce((sum, item) => sum + item.kg, 0);
  }
}

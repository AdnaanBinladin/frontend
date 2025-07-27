import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-inventory',
  standalone: true,
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class Inventory implements OnInit {
  products: any[] = [];
  product: any = null;
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchInventory();
  }

  fetchInventory(): void {
    this.http.get<any[]>('https://your-api-url.com/api/inventory').subscribe({
      next: data => this.products = data,
      error: err => console.error('Inventory load failed', err)
    });
  }

  viewProductDetails(product: any): void {
    this.product = product;
  }

  goBack(): void {
    this.product = null;
  }

  getStatusClass(status: string): string {
    const statusLower = status?.toLowerCase();
    if (statusLower === 'low') return 'low-stock';
    if (statusLower === 'transfer') return 'transfer';
    return '';
  }

  getFreshnessClass(freshness: string): string {
    const freshnessLower = freshness?.toLowerCase();
    if (freshnessLower === 'fresh') return 'text-success';
    if (freshnessLower === 'stale') return 'text-warning';
    if (freshnessLower === 'expired') return 'text-danger';
    return '';
  }

  get filteredProducts(): any[] {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

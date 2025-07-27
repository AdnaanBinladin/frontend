import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss'],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class ProductDetail implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchProduct(id);
  }

  fetchProduct(id: number): void {
    this.http.get(`https://your-api-url.com/api/products/${id}`).subscribe({
      next: data => this.product = data,
      error: err => console.error('Failed to load product', err)
    });
  }

  goBack(): void {
    history.back();
  }

  getStatusClass(status: string): string {
    if (!status) return '';
    const s = status.toLowerCase();
    if (s === 'low') return 'low-stock';
    if (s === 'transfer' || s === 'finish transfer') return 'transfer';
    if (s === 'in stock') return 'in-stock';
    return '';
  }

  getFreshnessClass(freshness: string): string {
    if (!freshness) return '';
    const f = freshness.toLowerCase();
    if (f === 'fresh') return 'text-success';
    if (f === 'stale') return 'text-warning';
    if (f === 'expired') return 'text-danger';
    return '';
  }
}

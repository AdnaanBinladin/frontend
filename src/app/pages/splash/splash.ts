import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './splash.html',
  styleUrls: ['./splash.scss']
})
export class splash {
  brandName = 'SolTrack';
  brandNameArray = this.brandName.split('');

  constructor(private router: Router) {}

  // Navigate after splash screen click
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

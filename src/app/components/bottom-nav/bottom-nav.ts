import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule,  RouterModule, MatIconModule],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.scss'
})
export class BottomNav {

}

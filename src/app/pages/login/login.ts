import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class login {
  email = '';
  password = '';

  constructor(private router: Router) {} // ✅ Inject router here

  onLogin() {
    console.log('Logging in:', this.email, this.password);
    this.router.navigate(['/dashboard']); // ✅ Use injected router
  }
}

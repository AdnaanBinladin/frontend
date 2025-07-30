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

  constructor(private router: Router) {} // ✅ Inject Router

  onLogin() {
    console.log('Logging in:', this.email, this.password);

    fetch('https://localhost:7275/api/Auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.email, password: this.password })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token); // ✅ Save the token
        this.router.navigate(['/dashboard']);       // ✅ Navigate after saving
      })
      .catch(err => {
        console.error('Login error:', err);
        alert('Login failed');
      });
  }
}

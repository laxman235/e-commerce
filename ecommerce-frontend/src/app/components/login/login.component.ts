import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // simple form validation
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password';
      return;
    }

    // synchronous login
    const success = this.authService.login(this.email, this.password);

    if (success) {
      this.router.navigate(['/']); // navigate to home/dashboard
    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }
}

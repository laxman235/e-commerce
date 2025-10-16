import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // synchronous signup (update this if your AuthService is async)
    const success = this.authService.signup({
  name: this.name,
  email: this.email,
  password: this.password
});

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = []; // temporary in-memory storage

  constructor() { }

  signup(user: any) {
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      return false; // User already exists
    }
    this.users.push(user);
    return true;
  }

  login(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    return user ? true : false;
  }
}

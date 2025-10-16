import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  constructor() { }

  addToCart(product: any) {
    const item = this.cartItems.find(p => p.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

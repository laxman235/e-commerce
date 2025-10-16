import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  private loadCart() {
    this.cartItems = (this.cartService as any).getCartItems?.() || [];
    this.calculateTotal();
  }

  remove(id: number) {
    if (typeof (this.cartService as any).removeFromCart === 'function') {
      (this.cartService as any).removeFromCart(id);
    }
    this.loadCart();
  }

  // delta = +1 or -1
  changeQty(item: any, delta: number) {
    const newQty = (item.quantity || 1) + delta;
    if (newQty < 1) return;

    // update local model first
    item.quantity = newQty;

    // Preferred: if CartService exposes updateQuantity(id, qty)
    const svc: any = this.cartService;
    if (typeof svc.updateQuantity === 'function') {
      svc.updateQuantity(item.id, newQty);
      this.calculateTotal();
      return;
    }

    // Fallback: rebuild the entire cart using clearCart + addToCart
    // This assumes addToCart(item) adds one unit of that item.
    if (typeof svc.clearCart === 'function' && typeof svc.addToCart === 'function') {
      // create a shallow clone to avoid mutation while iterating
      const snapshot = this.cartItems.map(ci => ({ ...ci }));
      svc.clearCart();

      snapshot.forEach(ci => {
        const qty = ci.quantity ?? 1;
        for (let i = 0; i < qty; i++) {
          // if addToCart expects a product object without quantity that's fine
          svc.addToCart({ ...ci });
        }
      });

      // reload local view from service (in case service normalizes items)
      this.loadCart();
      return;
    }

    // If neither method exists, simply recompute total locally
    this.calculateTotal();
  }

  calculateTotal() {
    const svc: any = this.cartService;
    if (typeof svc.getTotalPrice === 'function') {
      this.totalPrice = svc.getTotalPrice();
      return;
    }

    // fallback local calc
    this.totalPrice = this.cartItems.reduce((sum, it) => {
      const qty = it.quantity ?? 1;
      return sum + (it.price ?? 0) * qty;
    }, 0);
  }

  checkout() {
    alert('Checkout successful!');
    const svc: any = this.cartService;
    if (typeof svc.clearCart === 'function') {
      svc.clearCart();
    } else {
      // best-effort remove each
      this.cartItems.forEach(i => {
        if (typeof svc.removeFromCart === 'function') svc.removeFromCart(i.id);
      });
    }
    this.cartItems = [];
    this.totalPrice = 0;
  }
}

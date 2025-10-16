import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    mockCartService = jasmine.createSpyObj('CartService', [
      'getCartItems',     // <- matches component
      'removeFromCart',
      'getTotalPrice',
      'clearCart'         // <- matches component.checkout() behavior
    ]);

    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{ provide: CartService, useValue: mockCartService }]
    });

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create the CartComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart items on init', () => {
    const mockItems = [
      { id: 1, name: 'Phone', price: 10000, quantity: 1, image: '' },
      { id: 2, name: 'Laptop', price: 50000, quantity: 1, image: '' }
    ];
    mockCartService.getCartItems.and.returnValue(mockItems);
    mockCartService.getTotalPrice.and.returnValue(60000);

    component.ngOnInit();

    expect(component.cartItems).toEqual(mockItems);
    expect(component.totalPrice).toBe(60000);
    expect(mockCartService.getCartItems).toHaveBeenCalled();
    expect(mockCartService.getTotalPrice).toHaveBeenCalled();
  });

  it('should remove an item from the cart', () => {
    const itemId = 1;
    component.remove(itemId);

    expect(mockCartService.removeFromCart).toHaveBeenCalledWith(itemId);
  });

  it('should clear cart on checkout', () => {
    component.checkout();

    expect(mockCartService.clearCart).toHaveBeenCalled();
    expect(component.cartItems.length).toBe(0);
    expect(component.totalPrice).toBe(0);
  });
});

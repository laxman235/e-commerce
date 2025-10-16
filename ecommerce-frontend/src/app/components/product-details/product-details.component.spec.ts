import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { of } from 'rxjs';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let mockProductService: jasmine.SpyObj<ProductService>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    mockProductService = jasmine.createSpyObj('ProductService', ['getProductById']);
    mockCartService = jasmine.createSpyObj('CartService', ['addToCart']);

    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ProductService, useValue: mockProductService },
        { provide: CartService, useValue: mockCartService },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: new Map([['id', '1']]) } },
        },
      ],
    });

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load product on init', () => {
    const mockProduct = { id: 1, name: 'Test Product', price: 500, image: '', description: '' };
    mockProductService.getProductById.and.returnValue(mockProduct);

    component.ngOnInit();

    expect(component.product).toEqual(mockProduct);
    expect(mockProductService.getProductById).toHaveBeenCalledWith(1);
  });

  it('should call addToCart when button clicked', () => {
    const mockProduct = { id: 1, name: 'Demo', price: 200 };
    component.product = mockProduct;

    component.addToCart(mockProduct);

    expect(mockCartService.addToCart).toHaveBeenCalledWith(mockProduct);
  });
});

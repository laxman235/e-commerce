import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  price: number = 50000;

  
  constructor(private productService: ProductService,

    private router: Router


  ) {}

  
  

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  products = [
    { name: 'Samsung Galaxy S24', price: 79999, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/g/-original-imahgfmy2zgqvjmy.jpeg?q=70' },
    { name: 'HP Laptop', price: 59999, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/g/j/-original-imagz52cjk7g9f2f.jpeg?q=70' },
    { name: 'Sony Headphones', price: 2999, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/headphone/s/g/f/-original-imagtkgw6cfaz3zv.jpeg?q=70' },
    { name: 'Nike Shoes', price: 3499, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/shoe/s/9/n/-original-imagzq4jcmkqf4yy.jpeg?q=70' },
    { name: 'Smart Watch', price: 1999, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/smartwatch/g/e/l/-original-imagx9cdtfmepnpe.jpeg?q=70' }
  ];

  viewDetails(product: any) {
    this.router.navigate(['/product', product.id]);
  
  }
}

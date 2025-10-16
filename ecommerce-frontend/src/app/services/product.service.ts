import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    { id: 1, name: 'Apple iPhone 15', price: 79999, description: 'Latest iPhone with A17 Bionic Chip', image: 'https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg' },
    { id: 2, name: 'Samsung Galaxy S24', price: 74999, description: 'Flagship Samsung Phone', image: 'https://m.media-amazon.com/images/I/71t8UBh5UnL._SL1500_.jpg' },
    { id: 3, name: 'HP Pavilion Laptop', price: 65999, description: 'Powerful laptop with i5 13th Gen', image: 'https://m.media-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg' },
    { id: 4, name: 'Noise Smartwatch', price: 2499, description: 'Bluetooth calling smartwatch', image: 'https://m.media-amazon.com/images/I/61aJA-jt7kL._SL1500_.jpg' }
  ];

  constructor() {}

  // सर्व products मिळवण्यासाठी
  getProducts() {
    return this.products;
  }

  // एखादा specific product मिळवण्यासाठी (details page साठी)
  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}

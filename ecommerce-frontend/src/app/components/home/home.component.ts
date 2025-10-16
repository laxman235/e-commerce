import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories = [
    { name: 'Mobiles', image: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100' },
    { name: 'Fashion', image: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ec2982e5564fe07c.png?q=100' },
    { name: 'Electronics', image: 'https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100' },
    { name: 'Home', image: 'https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100' },
    { name: 'Beauty', image: 'https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100' }
  ];

  products = [
    { name: 'Samsung Galaxy S24', price: 79999, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/s/g/-original-imahgfmy2zgqvjmy.jpeg?q=70' },
    { name: 'HP Laptop', price: 59999, image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/b/g/-original-imahgfdygsnfncux.jpeg?q=70' },
    { name: 'Sony Headphones', price: 2999, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70' },
    { name: 'Nike Shoes', price: 3499, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/p/x/-original-imahg3u69czrghyg.jpeg?q=70' },
    { name: 'Smart Watch', price: 1999, image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-smartwatch/n/d/u/49-android-ios-t800-new-smart-watch-melzron-yes-original-imahyfyhpxqfxvfz.jpeg?q=70' }
  ];

}

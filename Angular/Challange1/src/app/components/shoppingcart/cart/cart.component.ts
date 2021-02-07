import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(
    private msg: MessengerService
  ) { }

  ngOnInit() {
   this.msg.getMsg().subscribe((product:Product)=>{
     
    this.cartItems.push({
      productName: product.name,
      qty:1,
      price:product.price
    })

    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })

   })
  }

  checkoutNull(cartTotal)
  {
    if (cartTotal == 0) 
    {
      alert('Please buy something!')
    }
    else if 
    (cartTotal <= 1000) 
    {
      alert("transaction Success!");
    }
  else if 
  (cartTotal > 1000)
    alert("You don't have enough gold!");
  
  }

 
}

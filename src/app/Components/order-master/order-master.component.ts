import { ProductsApiService } from 'src/app/Services/products-api.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { ICategory } from 'src/app/ViewModel/icategory';
import { CartItem } from 'src/app/ViewModel/iproduct';
import { ShoppingCart } from 'src/app/ViewModel/shopping-cart';
@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements OnInit {
  //Catogey
  categoryList: ICategory[]=[];
  selectedCat: number = 0;
  totalPrice: number = 0;
  //ShoppingCart
  AddedProductCart: ShoppingCart[] = [];
  constructor(
    //private pService:ProductsService,
    private apiServc:ProductsApiService) {
    // this.categoryList = [
    //   { id: 1, name: 'PC' },
    //   { id: 2, name: 'Phones' },
    //   { id: 3, name: 'Electoronics' },
    // ];
  }
  // cartItems:CartItem[]=[];
  addToCart(product: any) {
    this.AddedProductCart = product;
    console.log(product);
    for (let i = 0; i < this.AddedProductCart.length; i++) {
      this.totalPrice +=
        this.AddedProductCart[i].productPrice *
        this.AddedProductCart[i].productCount;
    }
  }

  RomveItme(ID: number) {
    //console.log(this.AddedProductCart);
    this.AddedProductCart = this.AddedProductCart.filter((item) => {
      return item.ID != ID;
    });
    // console.log(this.AddedProductCart);
    this.totalPrice = 0;
    for (let i = 0; i < this.AddedProductCart.length; i++) {
      this.totalPrice +=
        this.AddedProductCart[i].productPrice *
        this.AddedProductCart[i].productCount;

      }

  }
  ngOnInit(): void {
  // this.cartItems=  this.pService.getAllCartItems()
  this.apiServc.getAllCatogery().subscribe(cat=>{
    this.categoryList=cat;
  })
  }


}

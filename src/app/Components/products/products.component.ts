import { ProductsService } from './../../Services/products.service';
import { IProduct } from './../../ViewModel/iproduct';
import { Store } from './../../ViewModel/store';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DiscountOffers } from './../../ViewModel/discount-offers';
import { ShoppingCart } from 'src/app/ViewModel/shopping-cart';
import { NgForm } from '@angular/forms';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {

  @Input() inputCatID: number = 0;
  @Input() RemovedItems:ShoppingCart[]=[]
  totalPrics:EventEmitter<number>
  productInCart:ShoppingCart[]=[];
  @Output() PushShoppingCartItems:EventEmitter<ShoppingCart[]>;
  totalQuantity: number = 0;
  //select
  selectedOption: any;
  printedOption: any;
  //input
  user_Name: any;
  //DiscountOffers Enum
  public Discount = DiscountOffers;
  //Toggle
  show: boolean = true;
  userName: string = 'jbond';
  //Class Store//
  storeObj: Store;
  //ClientName
  ClientName: string;

  //ProductList
  //ProductList: IProduct[];
  ProductListFilter: IProduct[] = [];
  //Date
  prodDate: Date;

  constructor(//private productServic:ProductsService,
    private productServicApi:ProductsApiService     ) {
    this.totalPrics=new EventEmitter<number>()
    this.storeObj = new Store(
      'Mostaf Store',
      ['Ismailia', 'Suez', 'Cairo'],
      'https://picsum.photos/id/237/900/400'
    );
    this.ClientName = 'Mostaf';
    this.PushShoppingCartItems=new EventEmitter<ShoppingCart[]>();

    // this.ProductList = [
    //   {
    //     id: 1,
    //     name: 'Mac',
    //     quantity: 1,
    //     price:54200,
    //     img: 'https://picsum.photos/seed/picsum/200/300',
    //     categoryID: 1,
    //   },
    //   {
    //     id: 2,
    //     name: 'Dell',
    //     quantity: 30,
    //     price: 10240,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 1,
    //   },
    //   {
    //     id: 3,
    //     name: 'Lenovo',
    //     quantity: 0,
    //     price: 2025,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 1,
    //   },
    //   {
    //     id: 4,
    //     name: 'Sumsonge',
    //     quantity: 7,
    //     price: 12300,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 2,
    //   },
    //   {
    //     id: 5,
    //     name: 'OppO',
    //     quantity: 0,
    //     price: 8500,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 2,
    //   },
    //   {
    //     id: 6,
    //     name: 'Techno',
    //     quantity: 1,
    //     price: 8890,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 2,
    //   },
    //   {
    //     id: 7,
    //     name: 'Toshiba',
    //     quantity: 1,
    //     price:980,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 3,
    //   },
    //   {
    //     id: 7,
    //     name: 'Fresh',
    //     quantity: 0,
    //     price:690,
    //     img: 'https://picsum.photos/200/300?grayscale',
    //     categoryID: 3,
    //   },
    // ];
    // this.ProductListFilter=this.ProductList;
    this.prodDate = new Date();
  }
  ngOnChanges(): void {
   // this.filterCat();
//this.ProductListFilter=this.productServic.filterCat(this.inputCatID)
this.productServicApi.filterCat(this.inputCatID).subscribe(products=>{
  this.ProductListFilter=products
 })


}

  //Filter Category
  // private filterCat() {
  //   if (this.inputCatID == 0) {
  //     this.ProductListFilter = this.ProductList;
  //   } else
  //     this.ProductListFilter = this.ProductList.filter(
  //       (prod) => prod.categoryID == this.inputCatID
  //     );
  // }
  //*************Buy*************//
  buy(id: number,selectedQtn:number) {

    for (let i = 0; i < this.ProductListFilter.length; i++) {
      if (this.ProductListFilter[i].id == id) {

        if (this.ProductListFilter[i].quantity != 0&&this.ProductListFilter[i].quantity>=selectedQtn) {

          this.ProductListFilter[i].quantity-=selectedQtn;
        }
      }
    }
  }

  //select
  displayProducts() {
    this.printedOption = this.selectedOption;
  }
  ngOnInit(): void {
   // this.ProductListFilter=this.productServic.getAllProduct()
  //  this.productServicApi.getAllProduct().subscribe(products=>{
  //   this.ProductListFilter=products
  //  })

   this.getLatestProduct()
  }
  //Toggle Function
  toggle() {
    this.show = !this.show;
  }
  ///****GETLtaesUers */
getLatestProduct(){
  this.productServicApi.getAllProduct().subscribe((res)=>{
    this.ProductListFilter=res;
  })
}
  /******DELETE *********/
  deleteProduct(id:number){
    this.productServicApi.deleteProduct(id).subscribe(()=>{
      this.getLatestProduct();
    });
   // console.log(id);

  }


  AddToCart(ID:number,Quantity:number,Price:number,Name:string,Count:any)
  {

   // this.productServic.addToCart(ID,Quantity);

   if(this.RemovedItems.length!=0){
      this.productInCart=this.RemovedItems;
    }

    if(this.RemovedItems.length==0){
      this.productInCart=[];
    }
   if(Quantity!=0 && Quantity>=Count && Count!=0)
 {
   this.productInCart.push({
    ID:ID,
    productName:Name,
    productCount:+Count,
    productPrice:Price,
    productQuntity:Quantity
  });
  }
//execute Event
  this.PushShoppingCartItems.emit(this.productInCart)
  console.log(this.productInCart);
  this.buy(ID,Count);
  }


  // changeCat()
  // {
  //   this.selectedCatID=1;
  // }
  //   buy(productQuantity:number,id:number){
  //     for(prod of this.ProductList){
  //   if(prod.id==id)
  //   productQuantity++
  //   }
  // }

  productDetails(){

  }

}

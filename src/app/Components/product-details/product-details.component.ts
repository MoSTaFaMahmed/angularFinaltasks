import { ProductsApiService } from 'src/app/Services/products-api.service';
import { IProduct } from './../../ViewModel/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prodId: number = 0;
  prod: IProduct={} as IProduct;
  productsId: number[] = [];
  product:IProduct[]=[];
  prevId!:number;
  last=false;
  first=false;
  constructor(
    private activateRouteServicse: ActivatedRoute,
   // private productServ: ProductsService,
    private pServiceApi:ProductsApiService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit(): void {
     this.pServiceApi.getAllProduct().subscribe((s)=>{
      this.product=s;
    })
  //   this.prodId = Number(
  //     this.activateRouteServicse.snapshot.paramMap.get('id')
  //   );
  //  this.prod = this.productServ.findProductById(this.prodId);
    this.activateRouteServicse.paramMap.subscribe((paramMap)=>{
      this.prodId=Number(paramMap.get('id'));
      this.pServiceApi.findProductById(this.prodId).subscribe((selsct)=>{
        this.prod=selsct;
      })
    })
  }
  backToProd() {
   // this.location.back();
    this.router.navigate(['/Order'])
  }
  prevProd(id:number) {

   this.prevId=this.product.findIndex((ele) => ele.id ==id)
    if(this.prevId==0){
      this.first=true;
    //  this.last=false;
    }
    else{
      this.router.navigate(['/Order',this.product[ this.prevId-1].id])
    }



    // let crntIndex = this.productsId.findIndex((ele) => ele == this.prodId);
    // let prevId;
    // if (crntIndex > 0) {
    //   prevId = this.productsId[crntIndex - 1];
    //  this.router.navigate(['/ProductList',prevId])
    // }
  }
  nextProd(id:number) {

    this.prevId=this.product.findIndex((ele) => ele.id ==id)
    if( this.prevId==this.product.length-1){
     // this.first=false;
      this.last=true;
    }
    else{
      this.router.navigate(['/Order',this.product[ this.prevId+1].id])
    }



  //   let crntIndex = this.productsId.findIndex((ele) => ele == this.prodId);
  //   let nextId;
  //   if (crntIndex<this.productsId.length) {
  //     nextId = this.productsId[crntIndex + 1];
  //    this.router.navigate(['/ProductList',nextId])
  //   }
  }
}






// import { IProduct } from './../../ViewModel/iproduct';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductsService } from 'src/app/Services/products.service';
// import { Location } from '@angular/common';

// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.scss'],
// })
// export class ProductDetailsComponent implements OnInit {
//   prodId: number = 0;
//   prod: IProduct | null = null;
//   productsId: number[] = [];
//   constructor(
//     private activateRouteServicse: ActivatedRoute,
//     private productServ: ProductsService,
//     private location: Location,
//     private router:Router
//   ) {}

//   ngOnInit(): void {
//     this.productsId = this.productServ.getProductsId();
//   //   this.prodId = Number(
//   //     this.activateRouteServicse.snapshot.paramMap.get('id')
//   //   );
//   //  this.prod = this.productServ.findProductById(this.prodId);
//     this.activateRouteServicse.paramMap.subscribe((paramMap)=>{
//       this.prodId=Number(paramMap.get('id'));
//       this.prod = this.productServ.findProductById(this.prodId);
//     })
//   }
//   backToProd() {
//    // this.location.back();
//     this.router.navigate(['/Order'])
//   }
//   prevProd() {
//     let crntIndex = this.productsId.findIndex((ele) => ele == this.prodId);
//     let prevId;
//     if (crntIndex > 0) {
//       prevId = this.productsId[crntIndex - 1];
//      this.router.navigate(['/Order',prevId])
//     }
//   }
//   nextProd() {
//     let crntIndex = this.productsId.findIndex((ele) => ele == this.prodId);
//     let nextId;
//     if (crntIndex<this.productsId.length) {
//       nextId = this.productsId[crntIndex + 1];
//      this.router.navigate(['/Order',nextId])
//     }
//   }
// }

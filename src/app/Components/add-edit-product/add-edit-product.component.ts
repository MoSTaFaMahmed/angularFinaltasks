import { ICategory } from 'src/app/ViewModel/icategory';
import { IProduct } from './../../ViewModel/iproduct';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
catogeryList:ICategory[]=[];
 @ViewChild('myForm') form!:NgForm;
mode:string|null='view';
id!:number;
prodId: number = 0;
prod: IProduct={} as IProduct;
  constructor(//private pService:ProductsService,
    private pServiceApi:ProductsApiService,
    private route:ActivatedRoute ) {


      // this.catogeryList = [
      //   { id: 1, name: 'PC' },
      //   { id: 2, name: 'Phones' },
      //   { id: 3, name: 'Electoronics' },
      // ];
// this.route.params.subscribe(params=>{
//   this.mode=params['mode']
//   if(params['mode']!='add'){
// this.id=+params['id'];
// this.product=this.pService.findProductById(+params['id'])
//   }
// console.log(params)
// })
this.route.paramMap.subscribe((paramMap)=>{
  this.mode=paramMap.get('mode');
  if(Number(paramMap.get('mode')!='add')){
  this.prodId=Number(paramMap.get('id'));
 //this.prod = this.pService.findProductById(this.prodId);
 this.pServiceApi.findProductById(this.prodId).subscribe((selsct)=>{
   this.prod=selsct;
 })
}
})
    }

  ngOnInit(): void {
    // console.log("ffff",this.product)
    this.pServiceApi.getAllCatogery().subscribe(cat=>{
      this.catogeryList=cat;
    })
  }

  onSubmit(){
 console.log(this.form.value)
if(this.mode=='add'){
  this.pServiceApi.addNewProduct(this.form.value).subscribe()
  // this.pService.addNewProduct(this.form.value)
}else{
const values={...this.form.value,id:this.prodId}
 // this.pService.editProduct(this.prod.id,values)
this.pServiceApi.editProduct(this.prod.id,values).subscribe()
}
  }

// onClicsubmit(data:any){
// let category=this.catogeryList.find((index)=>index.name==data.category);

// const newproduct:IProduct={
//   id:(this.idParam==0)?Math.random()*100000:this.idParam,
//   name:data.name,
//   quantity:+data.quantity,
//   price:data.price,
//   img:data.img,
//   categoryID:{id:category?category.id:0,nam:data.categoryID}
// }
// }


}

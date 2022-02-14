import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  //ProductList
private ProductList: IProduct[];
//private cartItems:CartItem[]=[];
  constructor() {
    this.ProductList = [
      {
        id: 1,
        name: 'Mac',
        quantity: 1,
        price: 54200,
        img: 'https://picsum.photos/seed/picsum/200/300',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'Dell',
        quantity: 30,
        price: 10240,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 1,
      },
      {
        id: 3,
        name: 'Lenovo',
        quantity: 0,
        price: 2025,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 1,
      },
      {
        id: 4,
        name: 'Sumsonge',
        quantity: 7,
        price: 12300,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 2,
      },
      {
        id: 5,
        name: 'OppO',
        quantity: 0,
        price: 8500,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 2,
      },
      {
        id: 6,
        name: 'Techno',
        quantity: 1,
        price: 8890,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 2,
      },
      {
        id: 7,
        name: 'Toshiba',
        quantity: 1,
        price: 980,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 3,
      },
      {
        id: 8,
        name: 'Fresh',
        quantity: 0,
        price: 690,
        img: 'https://picsum.photos/200/300?grayscale',
        categoryID: 3,
      },
    ];
  }

  getAllProduct():IProduct[]
  {
    return this.ProductList;
  }
  // getAllCartItems():any
  // {
  //   return this.cartItems;
  // }
// addToCart(id:number,quantity:number){
//   const item=this.cartItems.find(el=>el['id']==id);
//   if(!item){
//     this.cartItems.push({id,quantity});
//   }else{
// item.quantity=quantity;
//   }
//   console.log("add",this.cartItems)
// }
 filterCat(catId:number):IProduct[] {
    if (catId == 0) {
      return this.ProductList;
    } else
      return this.ProductList.filter(
        (prod) => prod.categoryID == catId
      );
  }

  findProductById(prodId:number):IProduct
    {
    let product= this.ProductList.find(prod=>prod.id==prodId);
    return product?product: {} as IProduct;
  }
getProductsId():number[]{
  let prodsId:number[]=this.ProductList.map(prod=>prod.id);
  return prodsId;
}
  addNewProduct(product:IProduct){
    product.id=this.ProductList.length;
      this.ProductList.push(product)
  }
  editProduct(id:number,product:IProduct){
    console.log(product);
    let index= this.ProductList.findIndex(prod=>prod.id==id);
    console.log("index",index)
    if(index){

      this.ProductList[index]=product;
    }


  }
}

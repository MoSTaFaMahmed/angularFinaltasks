import { ICategory } from './icategory';
export interface IProduct {
  id: number;
  name: string;
  quantity:number;
  price:number;
  img:string;
  categoryID:number;
}
export interface CartItem{
  id:number,quantity:number
}

import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class KendoServiceService {
  private data :any[] = products;

  public productDatas(){
    return this.data;
  }
}

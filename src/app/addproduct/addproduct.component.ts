import { Component } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productcode=""
  productname=""
  mandate=""
  expdate=""
  brand=""
  price=""
  sellername=""
  distributor=""
  readValues=()=>
  {
  let data:any={"productcode":this.productcode,"productname":this.productname,"mandate":this.mandate,"expdate":this.expdate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"distributor":this.distributor}
  console.log(data)}

}

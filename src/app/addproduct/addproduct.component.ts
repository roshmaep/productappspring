import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
  constructor(private api:ApiService){}
  readValues=()=>
  {
  let data:any={"productcode":this.productcode,"productname":this.productname,"mandate":this.mandate,"expdate":this.expdate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"distributor":this.distributor}
  console.log(data)
  this.api.addproduct(data).subscribe(
    (response:any)=>{console.log(response)
      if(response.status =="success"){
        alert("course added successfully")
        this.productcode=""
        this.productcode=""
        this.mandate=""
        this.expdate=""
        this.brand=""
        this.price=""
        this.sellername=""
        this.distributor=""
        
      }
      else{
        alert("something wrong")
      }
    }
  ) 
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  submitFlag = "add";
  editIndxFlag = "";
  productList =[
    {
        
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "170.00",
        "imageUrl": "",
        "quantity": 56840
    },
    {
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "302.00",
        "imageUrl": "",
        "quantity": 9358
    },
    {
        
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": ""
    }
];
  product: any = {
      "name": "",
      "description": "",
      "price": ""
  };
  constructor(private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('userId')==undefined || localStorage.getItem('userId')=='') {
      this._router.navigate(["/login"])
    }
  }
  setAddFlag(){
    this.submitFlag = "add";
  }
  addProduct(addOrEdit){
    if (addOrEdit=="add") {   
      this.product= {
        "name": "",
        "description": "",
        "price": ""
      };
      this.submitFlag = "add";
      alert("Product added ");
        this.productList.push(this.product);
        this.product= {
          "name": "",
          "description": "",
          "price": ""
        };
    } else {
      this.productList[this.editIndxFlag] = this.product;
      alert("Product updated");
      this.product= {
        "name": "",
        "description": "",
        "price": ""
      };
    }
  }

  editProduct(ind){
    this.editIndxFlag = ind;
    this.submitFlag = "edit";
    this.product = this.productList[ind];
  }

  removeProduct(ind){
    this.productList.splice(ind,1);
    alert('product deleted...')
  }

}

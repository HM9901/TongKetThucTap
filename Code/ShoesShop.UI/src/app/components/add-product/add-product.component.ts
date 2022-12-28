import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  id!: number
  product!: Product
  name!:string;
  details!: string;
  size!: number;
  price!: number;
  amount!: number;
  img!:string;
  constructor(private _productService: ProductService, private router: Router){
    this._productService.getAllProducts().subscribe(data => {
      this.id = data.length + 1;
    })
  }

  public save(){

    this.product = new Product(this.id, this.name,  this.size, this.price, this.amount, this.details, this.img);
    return this._productService.postProduct(this.product).subscribe(data =>{
      this.router.navigate(['/product']);
    })
  }
}

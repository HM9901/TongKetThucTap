import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  id!: number;
  data: any;
  isSave = false;

  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
    this._productService.getProduct(this.id).subscribe((data) => {
      this.data = data;
      console.log(this.data);

    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  canExit(){
    if(this.isSave){
      return true;
    } else {
      return confirm('You have unsaved changes, Do you really want to discard these changes?');
    }
  }

  public save() {
    this.isSave = true
    this._productService.updateProduct(this.id, this.data).subscribe();
    this.router.navigate(['/product'])
  }

  public delete() {
    this._productService
      .deleteProduct(this.id)
      .subscribe((data) => this.router.navigate(['/product']));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'jhi-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent {
  constructor(protected activeModal: NgbActiveModal, private productService: ProductService) {}

  searchForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });

  cancel(): void {
    this.activeModal.dismiss();
  }

  doAdvancedSearch() {
    this.productService.query(this.searchForm.value).subscribe({
      next: res => {
        console.log(res);
        ;
      },
      error: err => console.log(err),
    });
  }
}

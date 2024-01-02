import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  // ngAfterViewInit(): void {
  //   console.log(this.sectionChild);
  // }

  private service = inject(ProductService);
  products!: product[];
  // @ViewChild('section') sectionChild!: ElementRef;
  ngOnInit(): void {
    // console.log('ngOnInit', this.sectionChild);
    this.service.getProducts().subscribe((data) => (this.products = data.products));
  }

}

import { ProductsService } from '@services';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent implements OnInit {
  public form: FormGroup;
  public id: number;
  public submitted: boolean = false;
  public isAddMode: boolean;

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductsService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.form = this.formBuilder.group({
      title:  ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      cost: [''],
      quantity: [''],
      star: 5,
      isDeleting: false
    })

    if(!this.isAddMode) {
      this.productService.getById(this.id)
      .subscribe(product => this.form.patchValue(product))
    }
  }

  get f() { return this.form.controls; }

  public onSubmit(): void {
    this.submitted = true;
    if(this.isAddMode) {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }

  private createProduct(): void {
    this.productService.create(this.form.value)
        .subscribe({
          next: () => {
            this.router.navigate(['../'], { relativeTo: this.route })
          },
          error: (error) => {
            console.log('error', error);
          }
        })
  }

  private updateProduct(): void {
    this.productService.update(this.id, this.form.value)
        .subscribe({
          next: () => {
            this.router.navigate(['../..'], { relativeTo:  this.route })
          },
          error: (error) => {
            console.log('error', error);
          }
        })
  }

  public deleteProduct(): void {
    this.productService.delete(this.id)
        .subscribe({
          next: () => {
            this.router.navigate(['../..'], { relativeTo: this.route})
          },
          error: (error) => {
            console.log('error', error);
          }
        })
  }
}

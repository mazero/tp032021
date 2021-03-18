import { ProductsService } from '@services';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  public subscription: Subscription

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductsService, 
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];

    this.form = this.formBuilder.group({
      title:  ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      cost: [''],
      quantity: [''],
      star: 5,
      isDeleting: false
    })

   this.productService.getById(this.id)
        .subscribe(product => this.form.patchValue(product))
  }

  get f() { return this.form.controls; }

  public onSubmit(): void {
    this.submitted = true;
    console.log(this.form.value);
  }
}

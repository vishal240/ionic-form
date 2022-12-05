import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: FormArray;
  orderForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }
  get orderFormControl(): FormArray {
    return this.orderForm.get("items") as FormArray;
  }
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  removeItem(i: any){
    this.items.removeAt(i)
  }
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
    this.addItem()
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern('^(0|[1-9][0-9]*)$')]],
    });
  }
  onSubmit(){
    console.log(this.items.value)
  }
}

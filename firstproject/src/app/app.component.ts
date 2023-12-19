import { Component } from "@angular/core";
import { FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  registerForm! : FormGroup;
  submitted = false;
  form : any;

  constructor( private formbuilder : FormBuilder) { }

  ngOnInit ( ) {
    this.registerForm =this.formbuilder.group ({
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]]
    })
  }
  get f() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true ;

    if(this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' +JSON.stringify(this.registerForm.value))
//   }
//   export interface IFormField {
//     label: string;
//     f_Name: string;
//     f_Type: string;
//     f_Value: string;
//     placeholder: string;
//     values: IDropdown[];
//   }
//   export interface IDropdown {
//     displayValue: string;
//     internalValue: string;
//   }
//   export interface IUser {
//     userName: string;
//   }
// 
  }}
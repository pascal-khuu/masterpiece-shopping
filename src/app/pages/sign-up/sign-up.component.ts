import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  inscription!:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.inscription = this.fb.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      userName: ['', [Validators.required,Validators.minLength(12), Validators.maxLength(30),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      
  })
      // {
      //   validator: this.passwordMatchValidator
      // })
 }
  onSubmitForm() {
    console.log(this.inscription.value);
  }
  // passwordMatchValidator(form: FormGroup) {
     
  //   if (form.get('password')?.value === form.get('confirmPassword')?.value) {
  //     return null;
  //   } else {
  //     return { mismatch: true };
  //   }
  // }
}



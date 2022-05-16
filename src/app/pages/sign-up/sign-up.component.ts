import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  inscription!:FormGroup;
  constructor(private fb: FormBuilder, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.inscription = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      username: ['', [Validators.required,Validators.minLength(12), Validators.maxLength(30),Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      
  })
     
 }
  onSubmitForm() {
    console.log(this.inscription.value);
    this.authentication.signUpUser(this.inscription.value.lastName, this.inscription.value.firstName, this.inscription.value.username, this.inscription.value.password).subscribe();

  }
 
}



import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInError=false;
  constructor(private authentication:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(dataForm: NgForm) {
    console.log(dataForm.value);
    const username = dataForm.value.username;
    const password = dataForm.value.password;
    const requeteObservable = this.authentication.signInUser(username, password);
    requeteObservable.subscribe({

      // method a appeler en cas de succès
      next: (resp: any) => {
        console.log(resp.token);
        // TODO stockage de mon token 
        localStorage.setItem("token", resp.token);
        this.router.navigateByUrl('/list-product');
        this.authentication.messager.next(true);
      },
      // method a appeler en cas d'error
      error: (err: any) => {
        // affichage message d'erreur coté page
        this.signInError = true;
        console.log(err);
      }
    })
  }


}

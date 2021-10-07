
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { AccService } from './acc.service';
import { Authentication } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
   loginForm:FormGroup;
   errors:string;
  constructor(private accountService:AccService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,[Validators.required, Validators.minLength(6)])
    });
  }
  
onSubmit(authData:Authentication){
  // this.accountService.authenticationPost(authData.email,authData.password);
  this.errors = this.accountService.authenticationGet(authData.email,authData.password);
}

}

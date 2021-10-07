import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Authentication } from './account.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccService {
  stringifiedData: any;  
  parsedJson: any; 
  userData: Authentication[];
  errors:string;
  constructor(private http: HttpClient,private router: Router) { }

    error = new Subject<string>();
    
  // authenticationPost(email: string,password: string){
  //     const authData: Authentication = {email: email, password: password};
  //     this.http
  //     .post<{name:string}>(' http://localhost:3000/user', authData
  //     ).subscribe(responseData => {
  //         this.stringifiedData = JSON.stringify(responseData);
  //         this.parsedJson = JSON.parse(this.stringifiedData);
  //         console.log(this.parsedJson.email);
  //     },error=>{
  //         this.error.next(error.message)
        
  //     }
  //     );

  // }
  authenticationGet(email: string,password: string){
    this.http
    .get(' http://localhost:3000/user',{
      params:{
        email: email,
        password:password
      
      }
    }

    ).subscribe(res => {
      this.userData = res as Authentication[]
      if(this.userData.length === 0){
      this.errors = "invalid username or password";
       
    }
    else{
      this.router.navigateByUrl('/home');
    }

     
    });
  
    return this.errors;

}
    }



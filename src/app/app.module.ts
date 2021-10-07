import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { ComponentModule } from 'src/component/component.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from '../component/home/nav-bar/nav-bar.component';
import { TrendingsComponent } from '../component/home/trendings/trendings.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', loadChildren: () => import('../component/component.module').then(m => m.ComponentModule) },

];


@NgModule({
  declarations: [
    AppComponent,
 

    AuthComponent,
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentModule,
    HttpClientModule,
    
      
  ],
  exports: [],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

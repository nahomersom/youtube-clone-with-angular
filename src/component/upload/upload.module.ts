import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FinalUploadComponent } from './upload/final-upload/final-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

const routes: Routes = [
  {
    path: "l",
    component: UploadComponent
  }
];
@NgModule({
  declarations: [
    UploadComponent,
    FinalUploadComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    UploaderModule,
    TextBoxModule,
    ButtonModule,
    DialogModule,

  ],
  exports:[RouterModule]
})
export class UploadModule { }

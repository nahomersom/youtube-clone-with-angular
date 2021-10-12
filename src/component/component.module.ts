import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload/upload.component';
import { FinalUploadComponent } from './upload/upload/final-upload/final-upload.component';
import { FormsModule } from '@angular/forms';
import { StudioComponent } from './studio/studio.component';
import { PlayerComponent } from './player/player.component';
import { NavBarComponent } from 'src/component/home/nav-bar/nav-bar.component';
import { TrendingsComponent } from 'src/component/home/trendings/trendings.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './home/nav-bar/videoFilter.pipe';
import { StudioNavBarComponent } from './home/nav-bar/studio-nav-bar/studio-nav-bar.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';

const routes: Routes = [
  { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'u', loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule) },
  { path: "home", component: HomeComponent},
  { path: "home/watch/:id", component: PlayerComponent},
  { path: "upload",component: UploadComponent},
  { path:"upload/finalizingUpload/:videoName", component:FinalUploadComponent},
  { path:"studio",component: StudioComponent},
];

@NgModule({
  declarations: [
    
    StudioComponent,
    PlayerComponent,
    NavBarComponent,
    TrendingsComponent,
    HomeComponent,
    FilterPipe,
    StudioNavBarComponent,
    
   
    
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule, 
    GridModule, 
    TextBoxModule,
    AutoCompleteModule
  
  ],
  exports: [NavBarComponent,TrendingsComponent],
})
export class ComponentModule { }

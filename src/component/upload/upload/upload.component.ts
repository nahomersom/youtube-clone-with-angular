
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
   upload:string = "/assets/images/upload_black_24dp.svg"; 
   fileLocation:string = "/assets/images/uploaded";
   selectedFile = null;
   error:string = null;
   selected:boolean = false;
   video = null;
   videoName = null;
   public buttons: Object = {
    browse: 'Select file',
    
  
     };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
        this.video = reader.result;
    this.videoName = this.video;
    
   this.router.navigate(['/upload/finalizingUpload',this.videoName]);
    };


   
  }
   uploadVideo(){
    this.videoName = this.video;
    this.router.navigate(['/upload/finalizingUpload',this.videoName]);
   }
  }
  



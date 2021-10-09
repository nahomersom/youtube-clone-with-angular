import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../upload.service';
import { Upload } from '../upload.model';
import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-final-upload',
  templateUrl: './final-upload.component.html',
  styleUrls: ['./final-upload.component.css'],
})
export class FinalUploadComponent implements OnInit {
  state = null;
  videoSrc = null;
  uploadForm:FormGroup;
  selectedThumbnail = null;
  thumbnail = null;
  error:string = null;
  public buttons: Object = {
    browse: '+',
    
  
     };
  date_of_upload = formatDate(new Date(), 'yyyy/MM/dd', 'en');;
  public constructor(
    private route: ActivatedRoute,
    private dom:DomSanitizer,
    private uploadService:UploadService,
    private router:Router,
    private http:HttpClient
    ) {
    
}
  ngOnInit() {
    this.route.params.subscribe(response => {
      this.videoSrc = response['videoName'];
    
    });
    this.uploadForm = new FormGroup({
       'video_title': new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(100)]),
       'description_of_the_video' : new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(200) ]),
       'thumbnail' : new FormControl(null,[Validators.required, ])
    });

    this.videoSrc =this.dom.bypassSecurityTrustResourceUrl(this.videoSrc); 

  }
  onThumbnailSelected(event){
    this.selectedThumbnail = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedThumbnail);
    reader.onload = () => {
        this.thumbnail = reader.result;
        // console.log(this.thumbnail);
        
    };
   
    if(this.selectedThumbnail.size > 33333333333333){
     this.error = "the file is too big";
    console.log(this.error);
      
   };


  }
  onSubmit(uploadData:Upload) {
    this.uploadService.uploadPost(this.videoSrc,uploadData.video_title,this.date_of_upload,this.thumbnail,uploadData.description_of_the_video)
    
    this.router.navigate(['/studio']);

  }

}

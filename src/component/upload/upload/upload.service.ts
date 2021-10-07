import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {Upload} from './upload.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  errors:string;
  constructor(private http: HttpClient,private router: Router) { }

    error = new Subject<string>();
    
  uploadPost(video_name: string,video_title: string,date_of_upload:any,thumbnail:any,description_of_the_video:string) {


      const uploadData: Upload = {
          video_name: video_name, 
          video_title: video_title,
          date_of_upload:date_of_upload,
          thumbnail: thumbnail,
          description_of_the_video:description_of_the_video
        };

      
  this.http
      .post<{name:string}>(' http://localhost:3000/uploaded_file', uploadData
      ).subscribe(res=>{
          console.log(res);
       })

  }

 


}




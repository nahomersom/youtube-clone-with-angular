import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TrendingService } from '../home/trendings/trending.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  uploadedData:any;
  video:any;
  play:any;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/uploaded_file')
    .subscribe(Response => {
      
      this.uploadedData = Response;
   

    })
  }
  onDelete(id){
    this.http.delete('http://localhost:3000/uploaded_file/'+id)
    .subscribe(res => res = 'Delete successful');
    this.ngOnInit();
  }
  onWatchVideo(videoId){
    this.router.navigate(['/home/watch', videoId]);

  }

}

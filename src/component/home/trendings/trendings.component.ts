import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TrendingService } from './trending.service';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.css']
})
export class TrendingsComponent implements OnInit {
  videos:any;

  constructor(private http: HttpClient,private router: Router,private trending:TrendingService) { }
 
  ngOnInit(){
    this.trending.getVideoDetails().subscribe(response => {
      this.videos = response;
    
    });  
    
  }
  
  threeDot:string = "/assets/images/1x/outline_more_vert_black_24dp.png";
 onPlayVideo(videoID){
  this.router.navigate(['/home/watch', videoID]);

 }
 }


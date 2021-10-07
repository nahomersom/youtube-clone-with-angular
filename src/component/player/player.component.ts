import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TrendingService } from '../home/trendings/trending.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  video:any;
  play:any;
  id: number;
  videos:any;
  
  constructor(private http:HttpClient,private route:ActivatedRoute, private dom:DomSanitizer,private trending:TrendingService) { 
       
  }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      this.id = response['id'];
    
    });
    this.trending.getVideoDetailsById(this.id).subscribe(response => {
      this.video = response;
      this.play = this.video.video_name.changingThisBreaksApplicationSecurity
      this.play = this.dom.bypassSecurityTrustResourceUrl(this.play); 
    });
    this.trending.getVideoDetails().subscribe(response => {
      this.videos = response;
    
    });
    
    
  }
  
  onWatchVideo(vid){
    this.trending.getVideoDetailsById(vid).subscribe(response => {
      this.video = response;
      this.play = this.video.video_name.changingThisBreaksApplicationSecurity
      this.play = this.dom.bypassSecurityTrustResourceUrl(this.play); 
    });
 
  }
}

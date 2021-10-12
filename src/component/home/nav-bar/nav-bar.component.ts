import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingService } from '../trendings/trending.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 videoList:any;
 videoDetail:any[]=[];
 videoObj = {};
 public fields: Object;
  constructor(private videoData:TrendingService,private router:Router) { }

  ngOnInit(): void {
    this.videoData.getVideoDetails().subscribe(response => {
  //     for (const key in response) {
  //       this.videoList = response[key];
  //         this.videoObj[this.videoList.id] = this.videoList.video_title
       
  //   // this.videoDetail.push(this.videoObj)      
  //      this.videoDetail.push(this.videoList.id)  
  // }
          this.videoList = response;
    
            console.log(this.videoList["date_of_upload"])
  });

  
}

watchVideo(event){

  var data = event.itemData.value;
  this.router.navigate(['/home/watch', data]);

}

  magnify:string = "/assets/images/magnify.svg";
  mic:string = "/assets/images/mic_black_24dp.svg";
  uploadVideo:string = "/assets/images/video-plus.svg";
  apps:string = "/assets/images/apps.svg";
  bell:string = "/assets/images/bell.svg";
  menu:string = "/assets/images/menu_black_24dp.svg";
  logo:string = "/assets/images/logo.png";
goToStudio(){
  window.open("/studio", "_blank");
}

}

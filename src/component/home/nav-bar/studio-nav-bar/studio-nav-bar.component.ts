import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-nav-bar',
  templateUrl: './studio-nav-bar.component.html',
  styleUrls: ['./studio-nav-bar.component.css']
})
export class StudioNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  magnify:string = "/assets/images/magnify.svg";
  mic:string = "/assets/images/mic_black_24dp.svg";
  uploadVideo:string = "/assets/images/video-plus.svg";
  apps:string = "/assets/images/apps.svg";
  bell:string = "/assets/images/bell.svg";
  menu:string = "/assets/images/menu_black_24dp.svg";
  studioLogo:string = "/assets/images/YouTube_Studio_logo.svg.png";
}

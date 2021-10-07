import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

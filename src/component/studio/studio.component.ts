import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  uploadedData:any;
  
  constructor(private http:HttpClient) { }

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

}

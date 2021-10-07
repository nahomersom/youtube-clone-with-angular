import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  video:any;
  constructor(private http: HttpClient) { }
public getVideoDetails(){
  return this.http.get('http://localhost:3000/uploaded_file');
  
    
}
public getVideoDetailsById(id:number){
  return this.http.get('http://localhost:3000/uploaded_file/'+id);
  
    
}
}

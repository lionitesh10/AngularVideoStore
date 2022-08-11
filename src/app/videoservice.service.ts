import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoserviceService {
  private url='http://127.0.0.1:5000'
  private videoUrl='http://127.0.0.1:5000/uploadvideo/'

  constructor(private http:HttpClient) { }

  getIntroData(){
    return this.http.get(this.url);
  }

  uploadVideo(formData:any){
    return this.http.post(this.videoUrl,formData);
  }

}

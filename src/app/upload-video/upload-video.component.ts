import { Component, OnInit } from '@angular/core';
import { VideoserviceService } from '../videoservice.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  fileName='';
  constructor(private video:VideoserviceService) { }

  ngOnInit(): void {
  }

  // onFileSelected(event){
  //   const file:File=event.target.files[0];
  //   if(file){
  //     this.filename=file.name;
  //     const formData=new FormData();
  //     formData.append("thumbnail",file),
  //     this.video.uploadVideo(formData)
  //   }
  // }

  onFileSelected(event: any){
    // console.log(event);
    const file:File=event.target.files[0]
    if (file) {  
  
      this.fileName = file.name;  

      const formData = new FormData();  

      formData.append("file", file);
      
      this.video.uploadVideo(formData).subscribe((res)=>{
        console.log(res);
      })
    }  
  }

}

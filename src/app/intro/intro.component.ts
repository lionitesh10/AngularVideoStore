import { Component, OnInit } from '@angular/core';
import {VideoserviceService} from '../videoservice.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  collections:any=[]
  constructor(private videoService:VideoserviceService) { }

  ngOnInit(): void {
    this.videoService.getIntroData().subscribe((result)=>{
        this.collections=result
        console.log(this.collections);
    })
  }

}

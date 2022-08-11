import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';

const routes: Routes = [
    {
      path:"intro",
      component:IntroComponent
    },
    {
      path:"upload",
      component:UploadVideoComponent
    }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

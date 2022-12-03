import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


var routes: any = [
  {
  path: '',
  component: ViewAllVideoComponent
  }, 
  {
  path: 'upload',
  component: UploadVideoComponent 
  }, 
  {
  path: 'login',
  component: LoginPageComponent 
  },
  { 
    path: 'video/:id', 
    component: SingleVidComponent 
  },
  ];
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { ViewAllVideoComponent } from './view-all-video/view-all-video.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SingleVidComponent } from './single-vid/single-vid.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadVideoComponent,
    ViewAllVideoComponent,
    NavBarComponent,
    LoginPageComponent,
    SingleVidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }

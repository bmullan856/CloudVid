import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent {
  data: any ;
  isNotLogedin: any = true
  form_data: any = new FormData();
  submitData: any = {
    File: '',
    userName: '',
    userID: '',
    FileName: '',
    title: '',
    publisher:  '',
    producer: '',
    genre: '',
    age: '',
    review: '',
  }
  isNotSubmitted: any = true
  loading = false
  loginData: any = {
    userName: '',
    isAdmin: '',
  }


  antherVid = () => {
    this.isNotSubmitted = true
    this.submitData = {
      File: '',
      userName: '',
      userID: '',
      FileName: '',
      title: '',
      publisher:  '',
      producer: '',
      genre: '',
      age: '',
      review: '',
    }
    this.form_data = new FormData()
  } 


  postImage = () => {    
    this.form_data.append('FileName', $('#FileName').val()); 
    this.form_data.append('userID', $('#userID').val()); 
    this.form_data.append('userName', $('#userName').val());
    this.form_data.append('title', $('#title').val());
    this.form_data.append('publisher', $('#publisher').val());
    this.form_data.append('producer', $('#producer').val());
    this.form_data.append('genre', $('#genre').val());
    this.form_data.append('age', $('#age').val());
    this.form_data.append('review', [$('#review').val()]);
    this.form_data.append('File', (document.getElementById("File") as HTMLInputElement | any)?.files[0]);

    this.PostRequest()
  }

  constructor(private webService: WebService) {}
  
    PostRequest = () => {
      this.loading = true;
      this.webService.postVideos(this.form_data).subscribe((response: any) => {
        this.isNotSubmitted = false
        this.loading = false;

        });
       }

  ngOnInit() {
    if (sessionStorage.getItem("userName") != '') {
      this.isNotLogedin = false
      this.loginData = {
        userName: sessionStorage.getItem("userName"),
        isAdmin: sessionStorage.getItem("isAdmin"),
      }
    console.log(sessionStorage.getItem("isAdmin"))
    console.log(sessionStorage.getItem("userName"))
    }

        
      }   

}

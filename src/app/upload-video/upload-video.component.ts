import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss']
})
export class UploadVideoComponent {
  data: any ;
  loading: boolean = false;
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

  updateForm = () => {
    // for ( var key in this.submitData ) {
    //   this.form_data.append(key, this.submitData[key]);
    // }

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
      this.webService.postVideos(this.form_data).subscribe((response: any) => {
        console.log('done')
        });
      }

}

import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-view-all-video',
  templateUrl: './view-all-video.component.html',
  styleUrls: ['./view-all-video.component.scss']
})
export class ViewAllVideoComponent {
  data: any ;
  loading: boolean = false;
  form_data: any = new FormData();

  delvid = (id: any) => {
    this.delSingleVid(id)
  }

  getImages = () => {
    this.loading = !this.loading
    this.getRequest()
  }

  constructor(private webService: WebService,) {}


  delSingleVid= (id: any) => {
    this.form_data.append('id', id); 
    this.webService.postVideos(this.form_data).subscribe((response: any) => {
      console.log('done')
      }); 
  }

  // ask to see ig this is possible
  goToSingleVid(): void {
    // this.stateService.data = {data};
    (<any>this.webService).navigate(['/video/{{video.id}}']);
}

  getRequest = () => {
    this.webService.getVideos().subscribe((response: any) => {
      this.data = response
      this.loading = !this.loading
      console.log(this.data)
      });
    }

  ngOnInit() { 
  }    
}

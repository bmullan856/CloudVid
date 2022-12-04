import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

 @Injectable()
export class WebService { constructor(private http: HttpClient) {}
          getVideos() {
            return this.http.get( 'https://prod-21.uksouth.logic.azure.com:443/workflows/ebbfc7da6bbb44818b31b57f10f297c7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=i0Ee7SJEGRyKErHhj8uwAXJDynzE8bl6r0hJPxt58R0');
          }

          postVideos(data: any) {
            console.log(data)
            return this.http.post( 'https://prod-05.uksouth.logic.azure.com:443/workflows/9782a30451f14de9b5255314e84738c1/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=I0u8VYKgnsCui9xjSaCmfRoF4IjI64EXOTqwhzxitDc', 
            data);
          }

          
          deleteVideos(data: any) {
            console.log(data)
            return this.http.delete( 'https://prod-25.uksouth.logic.azure.com:443/workflows/d8727c9aeba145358b2cabd1314d5091/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JN5AXsrtXuk86Y8dp1ThpNug3PE5nmxeDojvOGI7qzc', 
            data); 
          }
      }
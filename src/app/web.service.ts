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

          deleteVideos(id: any, filePath: any) {
            return this.http.delete( "https://prod-25.uksouth.logic.azure.com/workflows/d8727c9aeba145358b2cabd1314d5091/triggers/manual/paths/invoke/" + filePath + "/" + id + "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=JN5AXsrtXuk86Y8dp1ThpNug3PE5nmxeDojvOGI7qzc"); 
          }

          getUser(data: any) {
            return this.http.get( "https://prod-07.northeurope.logic.azure.com/workflows/efaf6efa0ffa43fdb5bfc3884fb85e4d/triggers/manual/paths/invoke/rest/v1/asset/" + data.userName + "/" + data.userPassword + "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1iBNxm6zdBkoFNswnTXacRXLkdedDvXoyRxPfx8dcMA"); 
          }

          postComment(id: any, review: any) {
            return this.http.put("https://prod-40.northeurope.logic.azure.com/workflows/897a8c6786964da5a7c0296ff250c596/triggers/manual/paths/invoke/rest/v1/asset/" + id + "?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YILEWSCKoZj2iia1TYjJljwlwTnCEe2zZh4N42ooEgg", review); 
          }
      }
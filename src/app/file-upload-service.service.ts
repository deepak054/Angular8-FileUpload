import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { FileItem } from 'ng2-file-upload';


/**
* @author Deepak kumar mahanta
*
* mahantadeepak1990@gmail.com 
*/

const UploadURL = 'http://localhost:9090/file-upload-service/file-upload';
@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(
    private http:HttpClient
  ) { }
  uploadFileToServer(file:FileItem): Observable<any>{
    
     

    console.log(file);
    
    const formData: FormData = new FormData()


    formData.append("file", file._file)

    return this.http.post(UploadURL, formData).
      pipe(map((data: any) => data),
      catchError((err: any) => {
        return throwError(err);
      })
    );



  }
}

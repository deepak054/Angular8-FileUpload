import { Component } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { FileUploadServiceService } from './file-upload-service.service';

/**
* @author Deepak kumar mahanta
*
* mahantadeepak1990@gmail.com 
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Upload a File';
  constructor(
    private fileUploadService:FileUploadServiceService
  ) { }

  public uploader: FileUploader = new FileUploader({isHTML5: true});

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file:FileItem) => { 
      /* file.withCredentials = false; */
      this.fileUploadService.uploadFileToServer(file).subscribe(p => {
        console.log(p);
      });
      console.log(file);
    };
   /*  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     }; */
 }
}

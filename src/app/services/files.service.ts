import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiPath = environment.apiUrl;
  model = 'files';

  constructor(private http: HttpClient) { }

  createFile(image: any): Observable<any> {
    return this.http.post(this.apiPath + this.model, {image: image});
  }

  getFileByName(fileName: string){
    return this.http.get(this.apiPath + this.model + `/${fileName}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';  
@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  private username= "Charity-Mutembei";
  // username: string;
  apiKey: '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' | undefined;

  constructor(private http: HttpClient) {
    console.log ('GitHub Service Started');
  }
getUser(){
  return this.http.get('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' + this.username);
  // .map((res: { json: () => any; }) => res.json());


}
getRepos(){
  return this.http.get('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' + this.username +'/repos');
  // .map((res: { json: () => any; }) => res.json());


}
updateUsername(username:any){
  this.username = username;
}

}

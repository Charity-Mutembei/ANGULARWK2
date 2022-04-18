import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
// import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  private username="Charity-Mutembei";

  constructor(private http: HttpClient) {
    console.log ('GitHub Service Started');
  }
getUser(){
  return this.http.get('https://api.github.com/users/' + this.username);
  // .map((res: { json: () => any; }) => res.json());


}
getRepos(){
  return this.http.get('https://api.github.com/users/' + this.username +'/repos');
  // .map((res: { json: () => any; }) => res.json());


}
updateUsername(username:string){
  this.username = username
}

}

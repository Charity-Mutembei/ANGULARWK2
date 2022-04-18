import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../gitservice.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GitserviceService]
})
export class GithubComponent implements OnInit {
  user: any;
  repos: any;
  username: any;

  constructor(private _githubService: GitserviceService) { 
    this.user = false;
  }
  search (){
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
      // console.log (this.user);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      // console.log (this.user);
    });

  }

  


  ngOnInit(): void {
  }

}

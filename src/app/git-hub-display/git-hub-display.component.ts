import { Component, OnInit } from '@angular/core';
import { GithubComponent } from '../github/github.component';
import { GitserviceService } from '../gitservice.service';

@Component({
  selector: 'app-git-hub-display',
  templateUrl: './git-hub-display.component.html',
  styleUrls: ['./git-hub-display.component.css'],
  providers: [GitserviceService],
  
})
export class GitHubDisplayComponent implements OnInit {
  user: any;
  repos: any;
  

  // constructor(private _githubService: GitserviceService) { 
  //   this._githubService.getUser().subscribe(user => {
  //     this.user = user;
  //     console.log (this.user);
  //   });


  //   this._githubService.getRepos().subscribe(repos => {
  //     this.repos = repos;
  //     // console.log (this.user);
  //   })
    

  // }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import { GitserviceService } from '../gitservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [GitserviceService]

})
export class NavbarComponent implements OnInit {
  username: any;
  user: any;
  repos: any

  constructor( private _githubService: GitserviceService) { }

  search(){
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log (this.user);
    });


    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      // console.log (this.user);
    })
    

    this._githubService.updateUsername(this.username);
  }

  ngOnInit(): void {
  }

}

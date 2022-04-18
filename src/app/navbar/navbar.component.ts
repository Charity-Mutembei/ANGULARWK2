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

  ngOnInit(): void {
  }

}

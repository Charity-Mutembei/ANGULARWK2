import { Component } from '@angular/core';
import { GitserviceService } from './gitservice.service';
// import { HTTP_PROVIDERS } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient, GitserviceService]
})
export class AppComponent {
  title = 'GITHUB';
}

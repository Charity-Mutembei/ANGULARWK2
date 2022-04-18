import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GitserviceService } from './gitservice.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { GitHubDisplayComponent } from './git-hub-display/git-hub-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    GitHubDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

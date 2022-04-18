import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubDisplayComponent } from './git-hub-display.component';

describe('GitHubDisplayComponent', () => {
  let component: GitHubDisplayComponent;
  let fixture: ComponentFixture<GitHubDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitHubDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

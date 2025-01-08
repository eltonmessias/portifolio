import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { MainSectionComponent } from "../../shared/main-section/main-section.component";
import { GithubService } from '../../services/github.service';
import { HttpClient } from '@angular/common/http';
import { ProjectSectionComponent } from "../../shared/project-section/project-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainSectionComponent, ProjectSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private githubService: GithubService){}

  ngOnInit(): void {
      this.githubService.getRepos().subscribe({
        next: (response) => console.log(response)
      })
      
  }

}

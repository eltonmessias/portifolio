import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {

}

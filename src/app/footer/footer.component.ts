import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  // Footer links
  footerLinks: string[] = ['Home', 'Exemples', 'Documentation', 'Donwload Library'];
  footerRouterLinks: string[] = ['Home', 'Exemples', 'Documentation', 'Donwload-Library'];

  // Icons
  githubIcon = faGithubSquare;
  linkedinIcon = faLinkedin;

  // Constructor
  constructor(){}
}

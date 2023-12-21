import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  // List of menu names
  menuItems: string[] = ['Home', 'Exemples', 'Documentation', 'Download Library'];
  menuLinks: string[] = ['Home', 'Exemples', 'Documentation', 'Download-Library'];

  constructor(){}
}

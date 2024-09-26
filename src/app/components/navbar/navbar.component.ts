import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  navigationLinks: any[] = [
    { label: 'NEW', url: '/' },
    { label: 'MENS', url: '/' },
    { label: 'WOMENS', url: '/' },
    { label: 'OUTLET SALE', url: '/' },
  ];
}

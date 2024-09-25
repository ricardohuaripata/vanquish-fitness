import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AnnouncementBarComponent } from "./components/announcement-bar/announcement-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AnnouncementBarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vanquish-fitness';
}

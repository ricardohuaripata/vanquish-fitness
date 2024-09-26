import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AnnouncementBarComponent } from "./components/announcement-bar/announcement-bar.component";
import { NewsletterComponent } from "./components/newsletter/newsletter.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AnnouncementBarComponent, NewsletterComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'vanquish-fitness';
}

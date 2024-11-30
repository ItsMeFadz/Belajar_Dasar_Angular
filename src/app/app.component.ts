import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent, RouterModule],
  // templateUrl: './app.component.html',
  template: `<main>
        <header class="brand-name">
          <img class="brand-logo" src="/assets/home.svg" alt="logo" aria-hidden="true" />
        </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}

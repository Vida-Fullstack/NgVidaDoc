import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ContentService } from './shared/service/content.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
    <div class="d-flex">
      <app-menu />
      <main class="container-fluid container-wraper">
        <router-outlet />
      </main>
    </div>
  `,
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  #router = inject(Router);
  #contentService = inject(ContentService);
  public getPages = this.#contentService.getPages;

  constructor() {
    const redirect = localStorage.getItem('@redirect');

    if (redirect) {
      this.#router.navigate([
        ...(redirect?.replace(/^\/+|\/+$/g, '')?.split('/') || ''),
      ]);
      localStorage.removeItem('@redirect');
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.#router.url === '/') {
        this.#router.navigate([this.getPages()[0].router]);
      }
    }, 1000);
  }
}

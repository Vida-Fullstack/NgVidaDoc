import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
    <div class="d-flex">
      <app-menu />
      <main class="container container-wraper">
        <router-outlet />
      </main>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  #router = inject(Router);

  constructor() {
    const redirect =
      localStorage
        .getItem('@redirect')
        ?.replace(/^\/+|\/+$/g, '')
        ?.split('/') || '';

    this.#router.navigate([redirect]);
    localStorage.removeItem('@redirect');
  }
}

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
    this.#router.navigate([localStorage.getItem('@redirect') || '']);
    localStorage.removeItem('@redirect');
  }
}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  #contentService = inject(ContentService);
  #breakpointObserver = inject(BreakpointObserver);

  public getPages = this.#contentService.getPages;
  public getSelectedPageContent = this.#contentService.getSelectedPageContent;

  public isToggleMenu = signal(true);
  public isMobile = signal(false);

  ngOnInit(): void {
    this.#breakpointObserver
      .observe('(max-width: 845px)')
      .subscribe((result) => {
        if (
          result.breakpoints[Breakpoints.Handset] ||
          result.breakpoints[Breakpoints.Tablet] ||
          result.matches
        ) {
          this.isMobile.set(true);
          this.isToggleMenu.set(false);
        } else {
          this.isMobile.set(false);
        }
      });
  }

  public toggleMenu() {
    if (this.isMobile()) {
      this.isToggleMenu.set(!this.isToggleMenu());
    }
  }
}

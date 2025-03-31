import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  public getPages = this.#contentService.getPages;
  public getSelectedPageContent = this.#contentService.getSelectedPageContent;
}

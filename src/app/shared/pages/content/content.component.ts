import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-content',
  imports: [MarkdownComponent, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContentComponent {
  #contentService = inject(ContentService);
  public getSelectedPageContent = this.#contentService.getSelectedPageContent;
  public getPagination = this.#contentService.getPagination;
}

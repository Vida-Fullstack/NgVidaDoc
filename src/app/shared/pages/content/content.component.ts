import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { ContentService } from '../../service/content.service';

declare var hljs: any;

@Component({
  selector: 'app-content',
  imports: [MarkdownComponent, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContentComponent implements AfterContentChecked {
  #contentService = inject(ContentService);
  #elementRef = inject(ElementRef);
  public getSelectedPageContent = this.#contentService.getSelectedPageContent;
  public getPagination = this.#contentService.getPagination;

  ngAfterContentChecked(): void {
    setTimeout(() => {
      this.#highlightCode();
    }, 50);
  }

  #highlightCode(): void {
    const blocks = this.#elementRef.nativeElement.querySelectorAll(
      'pre code[class*="language-"]'
    );
    blocks.forEach((block: any) => {
      hljs.highlightElement(block);
    });
  }
}

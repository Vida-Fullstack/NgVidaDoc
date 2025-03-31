import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  catchError,
  EMPTY,
  filter,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';

import { PAGES_CONFIG } from '../../app-pages.config';
import { IPage } from '../interface/IPage.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  readonly #router = inject(Router);
  readonly #http = inject(HttpClient);

  readonly #setSelectedPageContent = signal<string>('');
  get getSelectedPageContent(): Signal<string> {
    return this.#setSelectedPageContent.asReadonly();
  }

  readonly #setPages = signal<IPage[]>([]);
  get getPages(): Signal<IPage[]> {
    return this.#setPages.asReadonly();
  }

  readonly #setPagination = signal<{ previous?: IPage; next?: IPage }>({});
  get getPagination(): Signal<{ previous?: IPage; next?: IPage }> {
    return this.#setPagination.asReadonly();
  }

  constructor() {
    this.#init();
  }

  #init(): void {
    this.#fetchPagesConfig()
      .pipe(
        tap((pages) => {
          return this.#setPages.set(pages);
        })
      )
      .subscribe({
        next: () => this.#listenToRouterChanges(),
        error: (err) => console.error('Erro ao carregar configurações:', err),
      });
  }

  public getMarkdownFile(file: string): Observable<string> {
    return this.#http.get(`doc/${file}`, { responseType: 'text' }).pipe(
      tap((content) => this.#setSelectedPageContent.set(content)),
      catchError(() => {
        console.warn(`Arquivo não encontrado: ${file}`);
        this.#setSelectedPageContent.set('Página não encontrada.');
        return EMPTY;
      })
    );
  }

  #fetchPagesConfig(): Observable<IPage[]> {
    return of(PAGES_CONFIG).pipe(
      map((pages) =>
        pages.map((page) => ({
          ...page,
          router: `/${this.#formatRouter(page.title)}`,
          file: `${this.#formatRouter(page.title)}/${this.#formatRouter(
            page.title
          )}.md`,
          subMenu: page.subMenu?.map((subMenu) => ({
            ...subMenu,
            router: `/${this.#formatRouter(page.title)}/${this.#formatRouter(
              subMenu.title
            )}`,
            file: `${this.#formatRouter(page.title)}/${this.#formatRouter(
              subMenu.title
            )}.md`,
          })),
        }))
      )
    );
  }

  #listenToRouterChanges(): void {
    this.#router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map(() => this.#router.url),
        tap((currentUrl) => {
          if (currentUrl === '/') {
            const firstPage = this.getPages()[0];
            if (firstPage) {
              this.#router.navigate([firstPage.router]);
            }
          }
        }),
        tap((currentUrl) => this.#updatePagination(currentUrl)),
        switchMap((currentUrl) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          const file = this.#findFileByUrl(currentUrl);

          if (!file) {
            console.warn(`Rota não encontrada: ${currentUrl}`);
            this.#router.navigate(['/404']); // 🔥 Redireciona para a página 404
            return EMPTY;
          }

          return file ? this.getMarkdownFile(file) : EMPTY;
        })
      )
      .subscribe();
  }

  #formatRouter(title: string): string {
    return title.trim().replace(/\s+/g, '-').toLowerCase();
  }

  #findFileByUrl(currentUrl: string): string | undefined {
    const allPages = [
      ...this.getPages(),
      ...this.getPages().flatMap((p) => p.subMenu || []),
    ];
    return allPages.find((page) => page.router === currentUrl)?.file;
  }

  #updatePagination(currentUrl: string): void {
    const allPages: IPage[] = this.#flattenPages(this.getPages());

    const currentIndex = allPages.findIndex(
      (page) => page.router === currentUrl
    );

    if (currentIndex === -1) return;

    const previous = currentIndex > 0 ? allPages[currentIndex - 1] : undefined;
    const next =
      currentIndex < allPages.length - 1
        ? allPages[currentIndex + 1]
        : undefined;

    this.#setPagination.set({ previous, next });
  }

  #flattenPages(pages: IPage[]): IPage[] {
    let result: IPage[] = [];

    pages.forEach((page) => {
      const { subMenu, ...restPage } = page;
      result.push(restPage);

      if (page.subMenu?.length) {
        page.subMenu.forEach((subPage) => {
          const { subMenu, ...restSubPage } = subPage;
          result.push(restSubPage);
        });
      }
    });

    return result;
  }
}

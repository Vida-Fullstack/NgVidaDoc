import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import {
  catchError,
  EMPTY,
  filter,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';

import { IPage } from '../interface/IPage.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  readonly #router = inject(Router);
  readonly #http = inject(HttpClient);
  readonly #title = inject(Title);

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
        map((pages) => {
          this.#setPages.set(pages);
        })
      )
      .subscribe({
        next: () => this.#listenToRouterChanges(),
        error: (err) => console.error('Erro ao carregar configurações:', err),
      });
  }

  #getMarkdownFile(file: string): Observable<string> {
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
    return this.#http.get<IPage[]>('doc/app-pages.config.json').pipe(
      map((pages) =>
        pages.map((page) => ({
          ...page,
          router: `/${this.#formatRouter(page.title)}`,
          file: `${this.#formatRouter(page.title, page.title)}.md`,
          subMenu: page.subMenu?.map((subMenu) => ({
            ...subMenu,
            router: `/${this.#formatRouter(page.title, subMenu.title)}`,
            file: `${this.#formatRouter(page.title, subMenu.title)}.md`,
          })),
        }))
      )
    );
  }

  #listenToRouterChanges() {
    return this.#router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        map(() => {
          return this.#router.url;
        }),
        tap((currentUrl) => this.#updatePagination(currentUrl)),
        switchMap((currentUrl) => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (currentUrl === '/') {
            const firstPage = this.getPages()[0];

            if (firstPage.router) {
              return this.#router.navigate([firstPage.router]);
            }
          }

          const file = this.#findFileByUrl(currentUrl);
          this.#title.setTitle(`${file?.title} - Documentação`);

          if (file?.file) {
            return this.#getMarkdownFile(file?.file);
          }

          console.warn(`Rota não encontrada: ${currentUrl}`);
          this.#router.navigate(['/404']);
          return EMPTY;
        })
      )
      .subscribe();
  }

  #formatRouter(title: string, file: string | undefined = undefined): string {
    const setTile = this.#formtRouterSlug(title);

    if (file) {
      const setFile = this.#formtRouterSlug(file);

      return `${setTile}/${setFile}`;
    }

    return `${setTile}`;
  }

  #formtRouterSlug(path: string) {
    return path
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  #findFileByUrl(currentUrl: string) {
    const allPages = [
      ...this.getPages(),
      ...this.getPages().flatMap((p) => p.subMenu || []),
    ];

    return allPages.find((page) => page.router === currentUrl);
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

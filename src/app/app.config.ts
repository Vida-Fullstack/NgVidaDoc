import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { HIGHLIGHTJS_CONFIG, HighlightJsConfig } from 'ngx-highlight-js';
import { provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: HIGHLIGHTJS_CONFIG,
      useValue: { lang: 'html' } as HighlightJsConfig,
    },
    provideMarkdown(),
    provideHttpClient(withFetch(), withInterceptors([])),
    provideRouter(routes),
  ],
};

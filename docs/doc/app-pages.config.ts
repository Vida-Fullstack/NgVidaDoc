import { IPage } from '../../src/app/shared/interface/IPage.interface';

export const PAGES_CONFIG: IPage[] = [
  {
    title: 'Introdução',
    subMenu: [
      {
        title: 'Instalação',
      },
      {
        title: 'Versões',
      },
    ],
  },
] as const;

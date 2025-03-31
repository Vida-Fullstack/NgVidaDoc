import { IPage } from './shared/interface/IPage.interface';

export const PAGES_CONFIG: IPage[] = [
  {
    title: 'Introduction',
    subMenu: [
      {
        title: 'Installation',
      },
      {
        title: 'Usage',
      },
    ],
  },
] as const;

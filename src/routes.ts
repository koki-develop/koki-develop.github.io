export const Routes = {
  home: '/',
  privacyPolicy: 'privacyPolicy',
} as const;

export type Routes = typeof Routes[keyof typeof Routes];

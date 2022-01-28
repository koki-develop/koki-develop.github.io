export const Routes = {
  home: '/',
  privacyPolicy: '/privacy-policy',
} as const;

export type Routes = typeof Routes[keyof typeof Routes];

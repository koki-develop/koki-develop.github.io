import { config } from '@/config';

export type Options = {
  full: boolean;
};
export class Routes {
  public static home(options?: Options): string {
    return this._buildUrl('/', options);
  }

  public static privacyPolicy(options?: Options): string {
    return this._buildUrl('/privacy', options);
  }

  public static repositories(): string {
    return 'https://github.com/koki-develop?tab=repositories&type=source';
  }

  public static mailto(email: string): string {
    return `mailto:${email}`;
  }

  private static _buildUrl(pathname: string, options?: Options): string {
    if (!options?.full) {
      return pathname;
    }

    const url = new URL(config.url);
    url.pathname = pathname;
    return url.href;
  }
}

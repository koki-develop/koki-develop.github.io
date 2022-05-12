import urlJoin from 'url-join';
import { config } from '@/config';

export class Routes {
  public static home(): string {
    return '/';
  }

  public static privacyPolicy(): string {
    return '/privacy-policy';
  }

  public static repositories(): string {
    return 'https://github.com/koki-develop?tab=repositories&type=source';
  }

  public static mailto(email: string): string {
    return `mailto:${email}`;
  }
}

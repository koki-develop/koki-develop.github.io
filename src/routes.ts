import urlJoin from 'url-join';
import { config } from '@/config';

export class Routes {
  public static home(): string {
    return '/';
  }

  public static notes(): string {
    return '/notes';
  }

  public static note(slug: string): string {
    return `/notes/${slug}`;
  }

  public static privacyPolicy(): string {
    return '/privacy-policy';
  }

  public static repository(repo: string): string {
    return urlJoin(config.socials.github.url, repo);
  }

  public static repositories(): string {
    return `${config.socials.github.url}?tab=repositories&type=source`;
  }

  public static mailto(email: string): string {
    return `mailto:${email}`;
  }
}

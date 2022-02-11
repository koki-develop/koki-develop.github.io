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

  public static repositories(): string {
    return 'https://github.com/koki-develop?tab=repositories&type=source';
  }

  public static mailto(email: string): string {
    return `mailto:${email}`;
  }
}

export class Routes {
  public static home(): string {
    return '/';
  }

  public static notes(): string {
    return '/?tab=notes';
  }

  public static note(slug: string): string {
    return `/notes/${slug}`;
  }

  public static privacyPolicy(): string {
    return '/privacy-policy';
  }

  public static mailto(email: string): string {
    return `mailto:${email}`;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ENV?: 'production';
    readonly NEXT_PUBLIC_GA_MEASUREMENT_ID: string;
  }
}

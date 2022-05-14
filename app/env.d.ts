declare namespace NodeJS {
  interface ProcessEnv {
    readonly STAGE: 'production' | 'development';
    readonly GA_MEASUREMENT_ID: string;
  }
}

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: 'development' | 'production';
  readonly VITE_GA_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

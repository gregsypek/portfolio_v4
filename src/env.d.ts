// src/env.d.ts
interface ImportMetaEnv {
  VITE_PUBLIC_KEY: string;
  VITE_APP_SERVICE_ID: string;
  VITE_APP_TEMPLATE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
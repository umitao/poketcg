/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TCG: string;
  readonly VITE_SOME_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

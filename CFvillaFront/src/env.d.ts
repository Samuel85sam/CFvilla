/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_HOST: string
  // more env variables...
}

interface ImportMetaStaticEnv {
  readonly VITE_STATIC_HOST: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
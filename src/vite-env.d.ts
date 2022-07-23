/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_CLOUDNAME: string;
  readonly VITE_CLOUDINARY_UNSIGNED_PRESET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

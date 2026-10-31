/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_BUSINESS_EMAIL: string
  readonly VITE_BUSINESS_PHONE: string
  readonly VITE_OFFICE_ADDRESS: string
  readonly VITE_MAPS_EMBED_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

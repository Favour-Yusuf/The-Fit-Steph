// src/types/global.d.ts
declare module "*.css";

// Paystack inline.js (loaded via <script> in index.html)
interface PaystackHandler {
  openIframe: () => void;
}

interface PaystackSetupOptions {
  key: string;
  email: string;
  amount: number; // in kobo
  currency?: string;
  ref?: string;
  firstname?: string;
  metadata?: Record<string, unknown>;
  callback?: (response: { reference: string; [key: string]: unknown }) => void;
  onClose?: () => void;
}

interface PaystackPop {
  setup: (options: PaystackSetupOptions) => PaystackHandler;
}

interface Window {
  PaystackPop?: PaystackPop;
}

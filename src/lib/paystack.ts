// Thin wrapper around Paystack inline.js (loaded in index.html).

export interface PayArgs {
  email: string;
  firstName?: string;
  amountNaira: number; // amount in Naira; converted to kobo here
  planName: string;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
}

const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string | undefined;

export function payWithPaystack({
  email,
  firstName,
  amountNaira,
  planName,
  onSuccess,
  onClose,
}: PayArgs): { ok: boolean; error?: string } {
  if (!window.PaystackPop) {
    return { ok: false, error: "Payment library is still loading. Please try again." };
  }
  if (!PAYSTACK_KEY) {
    return { ok: false, error: "Payment is not configured (missing public key)." };
  }

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_KEY,
    email,
    firstname: firstName,
    amount: Math.round(amountNaira * 100), // Naira -> kobo
    currency: "NGN",
    ref: `${Date.now()}`,
    metadata: { plan: planName },
    callback: (response) => onSuccess(response.reference),
    onClose: () => onClose?.(),
  });

  handler.openIframe();
  return { ok: true };
}

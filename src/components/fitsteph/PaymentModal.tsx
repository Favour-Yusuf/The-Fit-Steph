import { useState } from "react";
import { payWithPaystack } from "../../lib/paystack";

export interface Plan {
  name: string;
  amountNaira: number;
  priceLabel: string; // e.g. "₦5,000"
}

interface Props {
  plan: Plan;
  onClose: () => void;
}

export default function PaymentModal({ plan, onClose }: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [paying, setPaying] = useState(false);
  const [done, setDone] = useState(false);

  const isValidEmail = /\S+@\S+\.\S+/.test(email);

  const handlePay = () => {
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setPaying(true);

    const result = payWithPaystack({
      email,
      firstName,
      amountNaira: plan.amountNaira,
      planName: plan.name,
      onSuccess: (reference) => {
        localStorage.setItem(
          "lastPayment",
          JSON.stringify({ plan: plan.name, email, reference, date: new Date() })
        );
        setPaying(false);
        setDone(true);
      },
      onClose: () => setPaying(false),
    });

    if (!result.ok) {
      setPaying(false);
      setError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fs-pay-overlay" onClick={onClose}>
      <div className="fs-pay-modal" onClick={(e) => e.stopPropagation()}>
        <button className="fs-pay-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>

        {done ? (
          <div className="fs-pay-success">
            <div className="check-ok">✓</div>
            <p>Payment received. Welcome to {plan.name}!</p>
            <p className="fs-pay-note">A confirmation has been sent to {email}.</p>
          </div>
        ) : (
          <>
            <span className="fs-pay-eyebrow">Secure Checkout</span>
            <div className="fs-pay-plan">{plan.name}</div>
            <div className="fs-pay-amount">{plan.priceLabel}</div>

            <label htmlFor="pay-name">First name</label>
            <input
              id="pay-name"
              type="text"
              placeholder="Your name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="pay-email">Email address</label>
            <input
              id="pay-email"
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
              <p className="fs-pay-note" style={{ color: "#ff9a8a" }}>
                {error}
              </p>
            )}

            <button
              className="fs-pay-btn"
              disabled={!isValidEmail || paying}
              onClick={handlePay}
            >
              {paying ? "Processing…" : `Pay ${plan.priceLabel} with Paystack`}
            </button>
            <p className="fs-pay-note">
              Payments are processed securely by Paystack. No card details touch this site.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

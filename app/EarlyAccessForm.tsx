"use client";

import { useState } from "react";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function EarlyAccessForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      shop: formData.get("shop"),
      email: formData.get("email"),
      website: formData.get("website"),
    };

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="access-form access-form-success">
        <div className="form-heading">
          <span>Early Access Request</span>
          <span>Received</span>
        </div>
        <div className="success-body">
          <div className="success-icon">✓</div>
          <h3>Thank you for requesting early access!</h3>
          <p>We’ve received your details and will be in touch with you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="access-form" id="access-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>Early access request</span>
        <span>Prelaunch</span>
      </div>

      {errorMsg && (
        <div className="form-error-banner">
          {errorMsg}
        </div>
      )}

      <label>
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" required disabled={loading} />
      </label>
      <label>
        <span>Shop name</span>
        <input type="text" name="shop" autoComplete="organization" required disabled={loading} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" required disabled={loading} />
      </label>
      <label>
        <span>Website <small>(optional)</small></span>
        <input type="url" name="website" autoComplete="url" inputMode="url" disabled={loading} />
      </label>
      <button className="button button-form" type="submit" disabled={loading}>
        {loading ? "Submitting..." : <>Request early access <ArrowIcon /></>}
      </button>
      <p>We’ll only contact you about Restora.</p>
    </form>
  );
}

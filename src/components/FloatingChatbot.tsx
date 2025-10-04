import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

type FormData = {
  name: string;
  phone: string;
  email: string;
  product: string;
};

export default function FloatingQuote() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    product: "",
  });
  const [loading, setLoading] = useState(false);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );

      alert("✅ Your request has been sent!");
      setFormData({ name: "", phone: "", email: "", product: "" });
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating CTA Button — hidden on mobile */}
      <div className="fixed bottom-10 right-2 z-50 flex items-center gap-2">
        {!open && (
          <span className="bg-white text-slate-800 text-xs font-medium px-3 py-1 rounded-full shadow-md">
            Get a Quote
          </span>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label="Open quote form"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Click-outside overlay */}
      {open && (
        <button
          className="fixed inset-0 z-40 bg-transparent md:block hidden"
          aria-label="Close overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out Panel (desktop only) */}
      <div
        className={[
          "fixed z-50 hidden md:block",
          "bottom-20 right-6",
          "w-80 sm:w-96",
          "transition-all duration-300 ease-out",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
      >
        <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white rotate-45 shadow-md" />
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-900">
          <div className="flex items-center justify-between bg-red-600 text-white px-4 py-3">
            <h3 id="quote-title" className="font-semibold text-sm">
              Get a Factory Quote
            </h3>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-md hover:bg-red-700/40"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-3 text-sm">
            <input
              type="text"
              required
              placeholder="Full Name *"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              required
              placeholder="Phone *"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="email"
              required
              placeholder="Email *"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <select
              required
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            >
              <option value="" disabled>
                Select Product (MOQ)
              </option>
              <option value="Round Neck T-Shirt (MOQ 100 pcs)">
                Round Neck T-Shirt (MOQ 100 pcs)
              </option>
              <option value="Polo T-Shirt (MOQ 100 pcs)">
                Polo T-Shirt (MOQ 100 pcs)
              </option>
              <option value="Marathon T-Shirt (MOQ 1000 pcs)">
                Marathon T-Shirt (MOQ 1000 pcs)
              </option>
              <option value="Staff Uniforms (MOQ 100 pcs)">
                Staff Uniforms (MOQ 100 pcs)
              </option>
              <option value="Promotional / Event Tees (MOQ 100 pcs)">
                Promotional / Event Tees (MOQ 100 pcs)
              </option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-semibold"
            >
              {loading ? "Submitting…" : "Submit Quote"}
            </button>

            <p className="text-[11px] text-slate-500 text-center">
              MOQ: 100 pcs (Marathon: 1000 pcs)
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

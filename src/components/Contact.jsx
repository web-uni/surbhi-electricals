// ─── Contact.jsx ──────────────────────────────────────────────
import { useState } from "react";
import useIntersect from "../hooks/useIntersect";
import { CONTACT, PRODUCTS } from "../data/constants";

/* ── Reusable clickable action card ── */
function ActionCard({ href, iconBg, icon, eyebrow, eyebrowColor, title, cta, ctaColor, hoverBg, hoverBorder, hoverShadow }) {
    return (
        <a
            href={href}
            className="contact-info-card"
            style={{ textDecoration: "none", cursor: "pointer" }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = hoverBorder;
                e.currentTarget.style.background = hoverBg;
                e.currentTarget.style.boxShadow = hoverShadow;
                e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.background = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
            }}
        >
            <div style={{ width: 46, height: 46, background: iconBg, borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
                {icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: eyebrowColor, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 3 }}>
                    {eyebrow}
                </div>
                <div style={{ fontWeight: 700, color: "#0e1f5b", fontSize: 15, wordBreak: "break-all" }}>
                    {title}
                </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: ctaColor, display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                {cta} <span style={{ fontSize: 14 }}>→</span>
            </div>
        </a>
    );
}

/* ── Enquiry form ── */
function EnquiryForm() {
    const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = () => {
        if (!form.name || !form.phone) return alert("Please fill in your name and phone number.");
        const subject = encodeURIComponent(`Enquiry from ${form.name} – Surbhi Electricals`);
        const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct: ${form.product}\n\n${form.message}`);
        window.open(`mailto:surbhielectric.ankl@gmail.com?subject=${subject}&body=${body}`);
        setSent(true);
    };

    if (sent) return (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontSize: 60, marginBottom: 16 }}>✅</div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 28, color: "#0e1f5b", marginBottom: 8 }}>ENQUIRY SENT!</div>
            <div style={{ color: "#718096", fontSize: 15 }}>We'll get back to you shortly.</div>
            <button onClick={() => setSent(false)} style={{ marginTop: 24, color: "#1a56db", background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, fontFamily: "'Outfit',sans-serif" }}>
                Send another →
            </button>
        </div>
    );

    return (
        <>
            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 26, color: "#0e1f5b", margin: "0 0 24px", textTransform: "uppercase" }}>
                Send an Enquiry
            </h3>

            {/* Name + Phone row */}
            <div className="form-name-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[
                    { name: "name", label: "Your Name *", placeholder: "Full Name" },
                    { name: "phone", label: "Phone *", placeholder: "Mobile Number" },
                ].map((f) => (
                    <div key={f.name}>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#4a5568", display: "block", marginBottom: 6 }}>{f.label}</label>
                        <input name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} className="form-input" />
                    </div>
                ))}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4a5568", display: "block", marginBottom: 6 }}>Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="form-input" />
            </div>

            {/* Product */}
            <div style={{ marginBottom: 16 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4a5568", display: "block", marginBottom: 6 }}>Product Category</label>
                <select name="product" value={form.product} onChange={handleChange} className="form-input">
                    <option value="">Select a category</option>
                    {PRODUCTS.map((p) => <option key={p.id} value={p.title}>{p.title}</option>)}
                    <option value="General Enquiry">General Enquiry</option>
                </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#4a5568", display: "block", marginBottom: 6 }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your requirement…" rows={4} className="form-input" style={{ resize: "none" }} />
            </div>

            <button className="btn-primary" onClick={handleSubmit} style={{ width: "100%", justifyContent: "center" }}>
                Send Enquiry →
            </button>
        </>
    );
}

/* ── Main section ── */
export default function Contact() {
    const [ref, visible] = useIntersect();

    return (
        <section id="contact" className="section-pad" style={{ padding: "100px 24px", background: "#f8faff" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>

                {/* Header */}
                <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 60 }}>
                    <span className="section-tag">Contact Us</span>
                    <h2 className="section-heading">Get in Touch</h2>
                    <p className="section-subtext" style={{ maxWidth: 480, margin: "0 auto" }}>
                        Have a requirement? Tap a number to call, tap an email to write, or fill the form below.
                    </p>
                </div>

                {/* Two-column layout */}
                <div
                    className="contact-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 48, alignItems: "start" }}
                >
                    {/* ── Left: info cards ── */}
                    <div className={`fade-up ${visible ? "visible" : ""}`} style={{ display: "flex", flexDirection: "column", gap: 12 }}>

                        {/* Address */}
                        <div className="contact-info-card">
                            <div style={{ width: 46, height: 46, background: "#EBF0FF", borderRadius: 13, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>📍</div>
                            <div>
                                <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>Our Address</div>
                                <div style={{ fontWeight: 600, color: "#0e1f5b", fontSize: 14, lineHeight: 1.6 }}>
                                    Plot No. 307/311 1/4, Near Ramdev Chokdi,<br />GIDC Ankleshwar, Gujarat – 393002
                                </div>
                            </div>
                        </div>

                        {/* Phone section label */}
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.09em", paddingLeft: 4, marginTop: 4 }}>
                            Phone Numbers
                        </div>

                        {/* Individual phone cards */}
                        {CONTACT.phones.map(({ number, label }) => (
                            <ActionCard
                                key={number}
                                href={`tel:${number}`}
                                icon="📞" iconBg="#dcfce7"
                                eyebrow={label} eyebrowColor="#10b981"
                                title={number}
                                cta="Tap to Call" ctaColor="#10b981"
                                hoverBg="#f0fdf4" hoverBorder="#6ee7b7"
                                hoverShadow="0 8px 25px rgba(16,185,129,0.12)"
                            />
                        ))}

                        {/* Email section label */}
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.09em", paddingLeft: 4, marginTop: 4 }}>
                            Email Addresses
                        </div>

                        {/* Individual email cards */}
                        {CONTACT.emails.map(({ email, label }) => (
                            <ActionCard
                                key={email}
                                href={`mailto:${email}`}
                                icon="✉️" iconBg="#dbeafe"
                                eyebrow={label} eyebrowColor="#1a56db"
                                title={email}
                                cta="Send Mail" ctaColor="#1a56db"
                                hoverBg="#eff6ff" hoverBorder="#93c5fd"
                                hoverShadow="0 8px 25px rgba(26,86,219,0.10)"
                            />
                        ))}

                        {/* Maps card */}
                        <div style={{ background: "linear-gradient(135deg,#0a1f5c,#1a56db)", borderRadius: 18, padding: 22, color: "white", marginTop: 4 }}>
                            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>📍 Find Us on Map</div>
                            <p style={{ color: "#93b4e8", fontSize: 13, lineHeight: 1.6, margin: "0 0 14px" }}>
                                GIDC Ankleshwar Industrial Area — easily accessible for contractors and industries.
                            </p>
                            <a
                                href={CONTACT.mapsUrl} target="_blank" rel="noreferrer"
                                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F5A623", color: "#7a3f00", fontWeight: 700, fontSize: 13, padding: "9px 18px", borderRadius: 10, transition: "opacity 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Open in Google Maps →
                            </a>
                        </div>
                    </div>

                    {/* ── Right: form ── */}
                    <div
                        className={`fade-up d2 ${visible ? "visible" : ""}`}
                        style={{ background: "white", border: "1.5px solid #e8edf5", borderRadius: 24, padding: 36, boxShadow: "0 8px 40px rgba(0,30,100,0.06)" }}
                    >
                        <EnquiryForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
// ─── Footer.jsx ───────────────────────────────────────────────
import { NAV_LINKS, PRODUCTS, CONTACT } from "../data/constants";

export default function Footer() {
    const scrollTo = (id) =>
        document.getElementById(id.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer style={{ background: "#030918", color: "#94a3b8", padding: "64px 24px 32px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>

                {/* Four-column grid — collapses via GlobalStyles media queries */}
                <div
                    className="footer-grid"
                    style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1.2fr", gap: 48, marginBottom: 48 }}
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#1a56db,#0e3fa3)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <span style={{ color: "white", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 20 }}>S</span>
                            </div>
                            <div>
                                <div style={{ color: "white", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: 16 }}>SURBHI ELECTRICALS</div>
                                <div style={{ color: "#1a56db", fontSize: 10, letterSpacing: "0.12em", fontWeight: 600 }}>&amp; HARDWARE</div>
                            </div>
                        </div>
                        <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 300 }}>
                            House of Industrial Electrical Goods. Trusted dealer for quality electrical products in GIDC Ankleshwar, Gujarat.
                        </p>
                        {/* Social / email pills */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                            {CONTACT.emails.map(({ email }) => (
                                <a
                                    key={email} href={`mailto:${email}`}
                                    style={{ fontSize: 11, color: "#94a3b8", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", padding: "5px 10px", borderRadius: 8, transition: "color 0.2s,border-color 0.2s", wordBreak: "break-all" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = "#F5A623"; e.currentTarget.style.borderColor = "rgba(245,166,35,0.4)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                                >
                                    ✉ {email}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div style={{ color: "white", fontWeight: 700, fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Quick Links</div>
                        {NAV_LINKS.map((l) => (
                            <button
                                key={l}
                                onClick={() => scrollTo(l)}
                                style={{ display: "block", background: "none", border: "none", color: "#94a3b8", fontSize: 13, cursor: "pointer", marginBottom: 10, padding: 0, textAlign: "left", transition: "color 0.2s", fontFamily: "'Outfit',sans-serif" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A623")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    {/* Products */}
                    <div>
                        <div style={{ color: "white", fontWeight: 700, fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Products</div>
                        {PRODUCTS.map((p) => (
                            <div
                                key={p.id}
                                style={{ fontSize: 13, marginBottom: 10, color: "#94a3b8", cursor: "pointer", transition: "color 0.2s" }}
                                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#e2e8f0")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                            >
                                {p.title}
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <div style={{ color: "white", fontWeight: 700, fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.08em" }}>Contact</div>
                        <div style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 12 }}>
                            📍 {CONTACT.address}
                        </div>
                        {CONTACT.phones.map(({ number }) => (
                            <a
                                key={number} href={`tel:${number}`}
                                style={{ display: "block", fontSize: 13, marginBottom: 6, color: "#94a3b8", transition: "color 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#F5A623")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                            >
                                📞 {number}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: "1px solid #1a2744", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ fontSize: 12 }}>© 2026 Surbhi Electricals and Hardware. All rights reserved.</div>
                    <div style={{ fontSize: 12 }}>GIDC Ankleshwar · Gujarat · India</div>
                </div>
            </div>
        </footer>
    );
}
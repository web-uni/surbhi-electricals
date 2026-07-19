// ─── GlobalStyles.jsx ─────────────────────────────────────────
// Inject global CSS once at app root.
// Includes: fonts, animations, shared utility classes, media queries.

export default function GlobalStyles() {
    return (
        <style>{`
      /* ── Fonts ── */
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; font-size: 16px; }
      body { font-family: 'Outfit', sans-serif; background: #f8faff; color: #1a202c; -webkit-font-smoothing: antialiased; }
      img  { display: block; max-width: 100%; }
      a    { text-decoration: none; }

      /* ── Typography helpers ── */
      .font-display { font-family: 'Barlow Condensed', sans-serif; }

      /* ── Scroll-reveal ── */
      .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease, transform 0.65s ease; }
      .fade-up.visible { opacity: 1; transform: translateY(0); }
      .fade-up.d1 { transition-delay: 0.10s; }
      .fade-up.d2 { transition-delay: 0.20s; }
      .fade-up.d3 { transition-delay: 0.30s; }
      .fade-up.d4 { transition-delay: 0.40s; }
      .fade-up.d5 { transition-delay: 0.50s; }
      .fade-up.d6 { transition-delay: 0.60s; }

      /* ── Section shared ── */
      .section-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
      .section-tag {
        display: inline-block;
        background: #EBF0FF; color: #1a56db;
        font-size: 12px; font-weight: 600;
        letter-spacing: 0.08em; text-transform: uppercase;
        padding: 5px 14px; border-radius: 20px; margin-bottom: 12px;
      }
      .section-heading {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 800; text-transform: uppercase; line-height: 1.1;
        font-size: clamp(2rem, 3.5vw, 3.2rem); color: #0e1f5b; margin-bottom: 16px;
      }
      .section-subtext { color: #718096; font-size: 16px; line-height: 1.7; }

      /* ── Buttons ── */
      .btn-primary {
        display: inline-flex; align-items: center; gap: 8px;
        background: linear-gradient(135deg, #F5A623, #f78c00);
        color: #7a3f00; font-weight: 700; font-size: 15px;
        padding: 13px 28px; border-radius: 14px; border: none; cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 20px rgba(245,166,35,0.4);
        font-family: 'Outfit', sans-serif;
        white-space: nowrap;
      }
      .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(245,166,35,0.5); }
      .btn-primary:active { transform: scale(0.98); }

      .btn-outline {
        display: inline-flex; align-items: center; gap: 8px;
        background: transparent; color: white; font-weight: 600; font-size: 15px;
        padding: 12px 28px; border-radius: 14px;
        border: 2px solid rgba(255,255,255,0.4); cursor: pointer;
        transition: border-color 0.2s, background 0.2s;
        font-family: 'Outfit', sans-serif;
        white-space: nowrap;
      }
      .btn-outline:hover { border-color: white; background: rgba(255,255,255,0.1); }

      /* ── Form inputs ── */
      .form-input {
        width: 100%; padding: 12px 16px;
        border: 1.5px solid #e2e8f0; border-radius: 12px;
        font-family: 'Outfit', sans-serif; font-size: 14px; color: #1a202c;
        background: white; transition: border-color 0.2s, box-shadow 0.2s; outline: none;
      }
      .form-input:focus { border-color: #4299e1; box-shadow: 0 0 0 3px rgba(66,153,225,0.15); }

      /* ── Nav link ── */
      .nav-link {
        position: relative; padding: 8px 16px; border-radius: 10px;
        font-size: 14px; font-weight: 500; color: #4a5568;
        transition: color 0.2s, background 0.2s;
        background: none; border: none; cursor: pointer;
        font-family: 'Outfit', sans-serif;
      }
      .nav-link:hover  { background: #EBF0FF; color: #1a56db; }
      .nav-link.active { background: #1a56db; color: white; }

      /* ── Product card ── */
      .product-card {
        position: relative; overflow: hidden; border-radius: 20px; cursor: pointer;
        transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease;
      }
      .product-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 28px 60px rgba(0,0,0,0.22); }
      .product-card .card-bg {
        position: absolute; inset: 0; background-size: cover; background-position: center;
        transition: transform 0.6s cubic-bezier(.22,1,.36,1), filter 0.4s ease;
        filter: brightness(0.72) saturate(1.15);
      }
      .product-card:hover .card-bg { transform: scale(1.08); filter: brightness(0.55) saturate(1.3); }
      .product-card .card-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(180deg,
          rgba(0,0,0,0.08) 0%,
          rgba(0,0,0,0.18) 40%,
          rgba(0,0,0,0.72) 100%
        );
      }
      .product-card .card-content {
        position: relative; z-index: 2; padding: 28px; height: 100%;
        display: flex; flex-direction: column;
      }
      .product-card .items-list {
        max-height: 0; overflow: hidden;
        transition: max-height 0.4s ease, opacity 0.4s ease; opacity: 0;
      }
      .product-card:hover .items-list { max-height: 300px; opacity: 1; }
      .product-card .see-hint { opacity: 1; transition: opacity 0.3s; }
      .product-card:hover .see-hint { opacity: 0; }

      /* ── Brand card ── */
      .brand-card {
        background: white; border-radius: 16px; border: 1.5px solid #e8edf5;
        transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        overflow: hidden; cursor: pointer;
      }
      .brand-card:hover { transform: translateY(-6px); border-color: #c7d2e8; box-shadow: 0 16px 40px rgba(0,30,100,0.12); }
      .brand-card .logo-area {
        height: 110px; display: flex; align-items: center; justify-content: center;
        padding: 20px; background: #f8f9fc; border-bottom: 1px solid #eef1f8;
        transition: background 0.3s;
      }
      .brand-card:hover .logo-area { background: #f0f4ff; }
      .brand-card img { max-height: 102px; max-width: 170px; object-fit: contain; filter: grayscale(25%); transition: filter 0.3s; }
      .brand-card:hover img { filter: grayscale(0%); }

      /* ── Why-us card ── */
      .why-card {
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.10);
        border-radius: 20px; padding: 28px;
        transition: background 0.3s, border-color 0.3s, transform 0.3s;
      }
      .why-card:hover { background: rgba(255,255,255,0.10); border-color: rgba(255,255,255,0.25); transform: translateY(-6px); }

      /* ── Contact info card ── */
      .contact-info-card {
        display: flex; align-items: center; gap: 16px;
        background: white; border: 1.5px solid #e8edf5; border-radius: 16px; padding: 18px 20px;
        transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s, background 0.3s;
      }

      /* ── Stat card ── */
      .stat-card {
        background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.20);
        border-radius: 18px; padding: 24px 20px; text-align: center; backdrop-filter: blur(8px);
        transition: background 0.3s, transform 0.3s;
      }
      .stat-card:hover { background: rgba(255,255,255,0.20); transform: translateY(-4px); }

      /* ── Filter pill ── */
      .filter-pill {
        padding: 8px 20px; border-radius: 50px; font-size: 13px; font-weight: 500;
        border: 1.5px solid #e2e8f0; background: white; color: #64748b;
        cursor: pointer; transition: all 0.2s; font-family: 'Outfit', sans-serif;
      }
      .filter-pill:hover  { border-color: #1a56db; color: #1a56db; background: #EBF0FF; }
      .filter-pill.active { background: #1a56db; border-color: #1a56db; color: white; box-shadow: 0 4px 12px rgba(26,86,219,0.3); }

      /* ── Ticker animation ── */
      @keyframes ticker-left  { from { transform: translateX(0); }         to { transform: translateX(-33.333%); } }
      @keyframes ticker-right { from { transform: translateX(-33.333%); }  to { transform: translateX(0); } }

      /* ── Hero animations ── */
      @keyframes float       { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-12px)} }
      @keyframes glow-pulse  { 0%,100%{box-shadow:0 0 20px rgba(245,166,35,0.3)} 50%{box-shadow:0 0 40px rgba(245,166,35,0.7)} }

      /* ── Scrollbar ── */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #f1f5f9; }
      ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 3px; }

      /* ══════════════════════════════════════════════
         RESPONSIVE BREAKPOINTS
         xs  < 480px   (small phones)
         sm  < 640px   (phones)
         md  < 768px   (large phones / small tablets)
         lg  < 1024px  (tablets)
         xl  < 1280px  (small laptops)
      ══════════════════════════════════════════════ */

      /* Navbar */
      @media (max-width: 768px) {
        .nav-desktop  { display: none !important; }
        .nav-hamburger { display: flex !important; }
      }
      @media (min-width: 769px) {
        .nav-hamburger { display: none !important; }
        .nav-mobile-menu { display: none !important; }
      }

      /* Hero two-col → single col */
      @media (max-width: 1024px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .hero-feature-grid { display: none !important; }
        .hero-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
      }
      @media (max-width: 640px) {
        .hero-stats-grid { grid-template-columns: repeat(2,1fr) !important; gap: 10px !important; }
        .hero-btns { flex-direction: column !important; }
        .hero-btns .btn-primary, .hero-btns .btn-outline { width: 100%; justify-content: center; }
        .hero-phones { flex-direction: column; gap: 10px !important; }
      }

      /* About two-col → single col */
      @media (max-width: 1024px) {
        .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      }

      /* Products grid */
      @media (max-width: 1280px) { .products-grid { grid-template-columns: repeat(3,1fr) !important; } }
      @media (max-width: 900px)  { .products-grid { grid-template-columns: repeat(2,1fr) !important; } }
      @media (max-width: 560px)  { .products-grid { grid-template-columns: 1fr !important; } }

      /* Brands grid */
      @media (max-width: 1024px) { .brands-grid { grid-template-columns: repeat(4,1fr) !important; } }
      @media (max-width: 640px)  { .brands-grid { grid-template-columns: repeat(2,1fr) !important; } }

      /* Why us grid */
      @media (max-width: 1024px) { .whyus-grid { grid-template-columns: repeat(2,1fr) !important; } }
      @media (max-width: 580px)  { .whyus-grid { grid-template-columns: 1fr !important; } }

      /* Contact two-col → single col */
      @media (max-width: 1024px) {
        .contact-grid { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 640px) {
        .form-name-row { grid-template-columns: 1fr !important; }
      }

      /* Footer four-col → two-col → single col */
      @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
      @media (max-width: 580px)  { .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }

      /* Generic padding scaling */
      @media (max-width: 640px) {
        .section-pad { padding-top: 64px !important; padding-bottom: 64px !important; }
        .section-container { padding-left: 16px !important; padding-right: 16px !important; }
        .section-heading { font-size: clamp(1.8rem,7vw,2.4rem) !important; }
        .section-subtext  { font-size: 14px !important; }
      }
    `}</style>
    );
}
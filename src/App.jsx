// ─── App.jsx ──────────────────────────────────────────────────
// Root entry point.
// All sections are independent components — comment out any
// section you don't need, or reorder freely.

import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Brands from "./components/Brands";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            {/* Global CSS — fonts, animations, responsive breakpoints */}
            <GlobalStyles />

            {/* Fixed top navigation */}
            <Navbar />

            {/* Page sections — in scroll order */}
            <Hero />
            <About />
            <Products />
            <Brands />
            <WhyUs />
            <Contact />
            <Footer />
        </>
    );
}
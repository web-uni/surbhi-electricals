// ─── useIntersect.js ──────────────────────────────────────────
// Fires once when the element enters the viewport.
// Returns [ref, isVisible] — attach ref to any DOM node.

import { useState, useEffect, useRef } from "react";

export default function useIntersect(options = {}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.12, ...options }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return [ref, visible];
}
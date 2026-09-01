import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer style={{
      background: "#020810",
      borderTop: "1px solid rgba(77,159,255,0.08)",
      padding: "80px 24px 36px", // Mobile ke liye padding kam ki hai (48 se 24)
    }}>
      {/* Grid Container */}
      <div style={{
        maxWidth: 1200, 
        margin: "0 auto",
        display: "grid",
        // Desktop ke liye columns (Media query mein override hoga)
        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
        gap: 48, 
        marginBottom: 60,
        
        // ---- Responsive Fix yahan hai ----
        "@media (maxWidth: 768px)": {
          gridTemplateColumns: "1fr", // Mobile par sab ek column mein
          gap: "40px",
          textAlign: "center", // Text ko center karein
          justifyItems: "center", // Items ko center karein
        }
      }}>
        
        {/* Brand Section */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28, 
            letterSpacing: 5,
            color: "#e8f0ff", 
            marginBottom: 6,
          }}>
            VOY<span style={{ color: "#4d9fff" }}>AGÉ</span>
          </div>
          <p style={{ 
            fontSize: 8, 
            letterSpacing: 5,
            color: "#38bdf8", 
            textTransform: "uppercase", 
            marginBottom: 20 
          }}>
            Luxury Travel
          </p>
          <p style={{ 
            fontSize: 13, 
            color: "rgba(232,240,255,0.35)",
            lineHeight: 1.9, 
            fontWeight: 300,
            // Mobile par maxWidth hataya taaki text poora dikhe
            maxWidth: "100%", 
            // Desktop par 240px width
            "@media (minWidth: 769px)": { maxWidth: 240 } 
          }}>
            Crafting extraordinary journeys for those who seek more than a destination.
          </p>
          
          {/* Social Icons */}
          <div style={{ 
            display: "flex", 
            gap: 12, 
            marginTop: 24,
            // Mobile par icons ko center karein
            justifyContent: "center", 
            "@media (minWidth: 769px)": { justifyContent: "flex-start" } 
          }}>
            {["𝕏", "in", "ig", "▶"].map((s) => (
              <motion.div 
                key={s} 
                whileHover={{ y: -2, scale: 1.1 }}
                style={{
                  width: 36, 
                  height: 36, 
                  borderRadius: "50%",
                  border: "1px solid rgba(77,159,255,0.2)",
                  background: "rgba(77,159,255,0.05)",
                  display: "flex", 
                  alignItems: "center",
                  justifyContent: "center", 
                  fontSize: 12,
                  color: "rgba(232,240,255,0.4)", 
                  cursor: "pointer",
                }}
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {[
          { 
            title: "Explore", 
            links: [
              { label: "Destinations", path: "/destinations" },
              { label: "Experiences", path: "/destinations" },
              { label: "Collections", path: "/destinations" },
              { label: "Special Offers", path: "/contact" }
            ] 
          },
          { 
            title: "Company", 
            links: [
              { label: "About Voyagé", path: "/about" },
              { label: "Our Story", path: "/about" },
              { label: "Careers", path: "/about" },
              { label: "Press", path: "/about" }
            ] 
          },
          { 
            title: "Support", 
            links: [
              { label: "Contact Us", path: "/contact" },
              { label: "FAQ", path: "/contact" },
              { label: "Privacy Policy", path: "#" },
              { label: "Terms", path: "#" }
            ] 
          },
        ].map((col) => (
          <div key={col.title}>
            <p style={{ 
              fontSize: 8, 
              letterSpacing: 4, 
              color: "#4d9fff",
              textTransform: "uppercase", 
              marginBottom: 20 
            }}>
              {col.title}
            </p>
            {col.links.map((link) => (
              <motion.p key={link.label} whileHover={{ x: 4 }} style={{ marginBottom: 14 }}>
                <Link
                  to={link.path}
                  style={{
                    fontSize: 13, 
                    color: "rgba(232,240,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s", 
                    fontWeight: 300,
                    display: "inline-block"
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4d9fff")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(232,240,255,0.35)")}
                >
                  {link.label}
                </Link>
              </motion.p>
            ))}
          </div>
        ))}
      </div>

      {/* Footer Bottom Bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        paddingTop: 28,
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center", 
        flexWrap: "wrap", 
        gap: 12,
        // Mobile par text ko center karein
        "@media (maxWidth: 768px)": {
          flexDirection: "column",
          textAlign: "center"
        }
      }}>
        <p style={{ fontSize: 11, color: "rgba(232,240,255,0.2)", letterSpacing: 1 }}>
          © 2026 Voyagé Luxury Travel. All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: "rgba(232,240,255,0.2)" }}>
          Crafted with ♥ by <span style={{ color: "#4d9fff" }}>Mahak</span>
        </p>
      </div>
    </footer>
  )
}
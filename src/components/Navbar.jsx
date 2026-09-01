import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) {
        setIsOpen(false)
      }
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const mobile = window.innerWidth <= 768
    setIsMobile(mobile)
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "DESTINATIONS", path: "/destinations" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ]

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          boxSizing: "border-box",
          zIndex: 999999,
          padding: scrolled ? "14px 20px" : "20px 24px",
          background: scrolled
            ? "rgba(4, 13, 26, 0.95)"
            : "linear-gradient(to bottom, rgba(4,13,26,0.9), transparent)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: "none", zIndex: 1000000 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#ffffff",
              }}
            >
              VOYAGÉ
            </span>
            <span
              style={{
                fontSize: "7px",
                letterSpacing: "2px",
                color: "#38bdf8",
                fontWeight: "600",
                marginTop: "-2px",
                textTransform: "uppercase",
              }}
            >
              LUXURY TRAVEL
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav 
          className="desktop-nav"
          style={{ 
            display: isMobile ? "none" : "flex",
            alignItems: "center", 
            gap: "32px" 
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  position: "relative",
                  textDecoration: "none",
                  fontSize: "12px",
                  letterSpacing: "2.5px",
                  fontWeight: isActive ? "600" : "400",
                  color: isActive ? "#38bdf8" : "#ffffff",
                  transition: "color 0.3s ease",
                }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "#38bdf8",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* BOOK BUTTON (Desktop) */}
        {!isMobile && (
          <div>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  padding: "10px 22px",
                  borderRadius: "6px",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)",
                }}
              >
                BOOK NOW →
              </motion.button>
            </Link>
          </div>
        )}

        {/* ✅ MOBILE HAMBURGER */}
        <button
          className="mobile-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "rgba(56, 189, 248, 0.1)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            borderRadius: "6px",
            width: "38px",
            height: "38px",
            cursor: "pointer",
            display: isMobile ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000000,
            color: "#38bdf8",
            fontSize: "18px",
          }}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* ✅ FULLSCREEN MOBILE MENU - Side se nahi, poora screen cover karega */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(4, 13, 26, 0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 999990,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
              padding: "20px",
            }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    textDecoration: "none",
                    fontSize: "18px",
                    letterSpacing: "3px",
                    fontWeight: isActive ? "600" : "400",
                    color: isActive ? "#38bdf8" : "#ffffff",
                    textAlign: "center",
                  }}
                >
                  {link.name}
                </Link>
              )
            })}

            <Link to="/contact" style={{ textDecoration: "none", marginTop: "12px", width: "100%", maxWidth: "240px" }}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
                  color: "#ffffff",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  padding: "14px",
                  borderRadius: "8px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(2, 132, 199, 0.3)",
                }}
              >
                BOOK NOW →
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
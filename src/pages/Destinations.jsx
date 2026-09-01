import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"
import Footer from "../components/Footer"

const ALL = [
  { id: 1, name: "Santorini", country: "Greece", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80", price: "$2,400", tag: "Popular", duration: "7 Nights", desc: "Perched high on volcanic cliffs overlooking the sparkling Aegean Sea." },
  { id: 2, name: "Kyoto", country: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80", price: "$3,100", tag: "Cultural", duration: "8 Nights", desc: "Serene bamboo groves, traditional tea houses, and ancient cherry blossoms." },
  { id: 3, name: "Maldives", country: "Indian Ocean", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", price: "$4,800", tag: "Luxury", duration: "10 Nights", desc: "Exclusive overwater bungalows nestled in private turquoise lagoons." },
  { id: 4, name: "Amalfi Coast", country: "Italy", img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80", price: "$2,900", tag: "Romantic", duration: "7 Nights", desc: "Cliffside luxury villas with unmatched Mediterranean coast views." },
  { id: 5, name: "Bali", country: "Indonesia", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", price: "$1,800", tag: "Trending", duration: "9 Nights", desc: "Spiritual retreats surrounded by lush emerald jungle terraces." },
  { id: 6, name: "Dubai", country: "UAE", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", price: "$3,500", tag: "Exclusive", duration: "6 Nights", desc: "Ultra-modern skylines combined with royal desert experiences." },
  { id: 7, name: "Paris", country: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", price: "$2,600", tag: "Romantic", duration: "5 Nights", desc: "Classic haute cuisine, art museums, and private Seine cruises." },
  { id: 8, name: "New York", country: "USA", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80", price: "$2,200", tag: "Urban", duration: "5 Nights", desc: "Iconic penthouses and exclusive theatrical backstage passes." },
  { id: 9, name: "Safari Kenya", country: "Kenya", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80", price: "$5,200", tag: "Adventure", duration: "8 Nights", desc: "Luxury tented camps amidst raw, untamed wilderness." },
]

export default function Destinations() {
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const textCyan = "#38bdf8"
  const textWhite = "#ffffff"
  const textSubtle = "#cbd5e1"

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    setBookingSuccess(true)
    setTimeout(() => { 
      setBookingSuccess(false)
      setSelectedBooking(null) 
    }, 3000)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} 
      style={{ backgroundColor: "#040d1a", color: textSubtle, minHeight: "100vh" }}
    >
      {/* ── HERO ── */}
      <div style={{
        position: "relative", 
        height: "60vh", 
        overflow: "hidden",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        paddingTop: "80px",
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/hero.mp4" type="video/mp4"/>
        </video>
        <div style={{ 
          position: "absolute", 
          inset: 0,
          background: "linear-gradient(to bottom, rgba(4,13,26,0.6) 0%, #040d1a 100%)" 
        }}/>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px" }}>
          <span style={{ 
            fontSize: 10, 
            letterSpacing: 5, 
            color: textCyan,
            textTransform: "uppercase", 
            fontWeight: 600, 
            display: "block", 
            marginBottom: 12 
          }}>
            ◆ Curated Expeditions
          </span>
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)", 
            color: textWhite,
            fontWeight: 700, 
            lineHeight: 1.1 
          }}>
            Our Signature{" "}
            <span style={{ color: textCyan, fontStyle: "italic" }}>Destinations</span>
          </h1>
        </div>
      </div>

      {/* ── CARDS ── */}
      <section style={{ padding: "80px 20px 120px", background: "#040d1a" }}>
        <div style={{
          maxWidth: 1280, 
          margin: "0 auto",
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 32,
        }}>
          {ALL.map((d, i) => (
            <ScrollReveal key={d.id} delay={i * 0.05}>
              <motion.div 
                whileHover={{ y: -10 }} 
                transition={{ duration: 0.3 }}
                style={{
                  background: "#081b33", 
                  borderRadius: 16, 
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
                  display: "flex", 
                  flexDirection: "column", 
                  height: "100%", 
                }}
              >
                <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
                  <motion.img 
                    src={d.img} 
                    alt={d.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    whileHover={{ scale: 1.08 }} 
                    transition={{ duration: 0.6 }}
                  />
                  <div style={{ 
                    position: "absolute", 
                    inset: 0,
                    background: "linear-gradient(to top, #081b33 0%, transparent 60%)" 
                  }}/>

                  <span style={{
                    position: "absolute", top: 16, left: 16,
                    background: "rgba(2,132,199,0.9)", color: "#fff",
                    fontSize: 9, letterSpacing: 2, padding: "5px 14px",
                    borderRadius: 20, fontWeight: 600, textTransform: "uppercase",
                  }}>{d.tag}</span>

                  <span style={{
                    position: "absolute", top: 16, right: 16,
                    background: "rgba(4,13,26,0.7)", backdropFilter: "blur(10px)",
                    color: textSubtle, fontSize: 10, padding: "5px 12px",
                    borderRadius: 20, border: "1px solid rgba(255,255,255,0.15)",
                  }}>🕐 {d.duration}</span>

                  <div style={{ position: "absolute", bottom: 16, left: 20, right: 20 }}>
                    <h3 style={{ 
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 26, color: textWhite, fontWeight: 700, lineHeight: 1.1 
                    }}>
                      {d.name}
                    </h3>
                    <p style={{ 
                      fontSize: 10, letterSpacing: 3, color: textCyan,
                      textTransform: "uppercase", fontWeight: 600, marginTop: 4 
                    }}>
                      {d.country}
                    </p>
                  </div>
                </div>

                <div style={{ 
                  padding: "20px 24px 24px", 
                  display: "flex",
                  flexDirection: "column", 
                  flexGrow: 1, 
                  justifyContent: "space-between" 
                }}>
                  <p style={{ 
                    fontSize: 13, color: textSubtle, lineHeight: 1.7,
                    fontWeight: 300, marginBottom: 20 
                  }}>{d.desc}</p>

                  <div style={{ 
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: 16, 
                    display: "flex",
                    justifyContent: "space-between", 
                    alignItems: "center" 
                  }}>
                    <div>
                      <span style={{ 
                        fontSize: 9, letterSpacing: 2,
                        color: "rgba(203,213,225,0.5)", textTransform: "uppercase",
                        display: "block" 
                      }}>Starting From</span>
                      <span style={{ 
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 24, color: textWhite, fontWeight: 700 
                      }}>{d.price}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedBooking(d)}
                      style={{
                        background: "#0284c7", color: "#fff", border: "none",
                        padding: "12px 24px", fontSize: 11, borderRadius: 6,
                        fontWeight: 600, letterSpacing: 1, cursor: "pointer",
                      }}
                    >
                      BOOK NOW →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {selectedBooking && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBooking(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(4,13,26,0.92)", backdropFilter: "blur(16px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: 600, width: "100%", background: "#081b33",
                border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16,
                padding: 36, boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
                position: "relative", maxHeight: "90vh", overflowY: "auto",
              }}
            >
              <button 
                onClick={() => setSelectedBooking(null)}
                style={{ 
                  position: "absolute", top: 20, right: 20,
                  background: "transparent", border: "none",
                  color: textWhite, fontSize: 20, cursor: "pointer" 
                }}
              >
                ✕
              </button>

              {bookingSuccess ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ fontSize: 50, marginBottom: 16 }}>✨</div>
                  <h3 style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28, color: textWhite, marginBottom: 10 
                  }}>
                    Booking Requested!
                  </h3>
                  <p style={{ fontSize: 14, color: textSubtle }}>
                    Our luxury travel advisor will contact you shortly regarding{" "}
                    <strong>{selectedBooking.name}</strong>.
                  </p>
                </div>
              ) : (
                <>
                  <p style={{ 
                    fontSize: 10, letterSpacing: 4, color: textCyan,
                    textTransform: "uppercase", fontWeight: 600, marginBottom: 6 
                  }}>
                    ◆ EXPEDITION RESERVATION
                  </p>
                  <h2 style={{ 
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28, color: textWhite, marginBottom: 20 
                  }}>
                    Book Your Trip To{" "}
                    <span style={{ color: textCyan }}>{selectedBooking.name}</span>
                  </h2>

                  <form onSubmit={handleBookingSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={{ 
                        fontSize: 10, letterSpacing: 2, color: textCyan,
                        textTransform: "uppercase", display: "block",
                        marginBottom: 6, fontWeight: 600 
                      }}>Full Name *</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="John Doe"
                        style={{ 
                          width: "100%", background: "#040d1a",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: textWhite, padding: "12px 16px",
                          borderRadius: 6, outline: "none",
                          fontFamily: "'Jost', sans-serif" 
                        }}
                        onFocus={e => e.target.style.borderColor = textCyan}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                      <div>
                        <label style={{ 
                          fontSize: 10, letterSpacing: 2, color: textCyan,
                          textTransform: "uppercase", display: "block",
                          marginBottom: 6, fontWeight: 600 
                        }}>Email *</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="john@example.com"
                          style={{ 
                            width: "100%", background: "#040d1a",
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: textWhite, padding: "12px 16px",
                            borderRadius: 6, outline: "none",
                            fontFamily: "'Jost', sans-serif" 
                          }}
                          onFocus={e => e.target.style.borderColor = textCyan}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                        />
                      </div>
                      <div>
                        <label style={{ 
                          fontSize: 10, letterSpacing: 2, color: textCyan,
                          textTransform: "uppercase", display: "block",
                          marginBottom: 6, fontWeight: 600 
                        }}>Phone *</label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="+1 234 567 890"
                          style={{ 
                            width: "100%", background: "#040d1a",
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: textWhite, padding: "12px 16px",
                            borderRadius: 6, outline: "none",
                            fontFamily: "'Jost', sans-serif" 
                          }}
                          onFocus={e => e.target.style.borderColor = textCyan}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                      <div>
                        <label style={{ 
                          fontSize: 10, letterSpacing: 2, color: textCyan,
                          textTransform: "uppercase", display: "block",
                          marginBottom: 6, fontWeight: 600 
                        }}>Travel Date</label>
                        <input 
                          type="date"
                          style={{ 
                            width: "100%", background: "#040d1a",
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: textWhite, padding: "12px 16px",
                            borderRadius: 6, outline: "none",
                            fontFamily: "'Jost', sans-serif" 
                          }}
                          onFocus={e => e.target.style.borderColor = textCyan}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                        />
                      </div>
                      <div>
                        <label style={{ 
                          fontSize: 10, letterSpacing: 2, color: textCyan,
                          textTransform: "uppercase", display: "block",
                          marginBottom: 6, fontWeight: 600 
                        }}>Guests</label>
                        <input 
                          type="number" 
                          defaultValue={2} 
                          min={1}
                          style={{ 
                            width: "100%", background: "#040d1a",
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: textWhite, padding: "12px 16px",
                            borderRadius: 6, outline: "none",
                            fontFamily: "'Jost', sans-serif" 
                          }}
                          onFocus={e => e.target.style.borderColor = textCyan}
                          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ 
                        fontSize: 10, letterSpacing: 2, color: textCyan,
                        textTransform: "uppercase", display: "block",
                        marginBottom: 6, fontWeight: 600 
                      }}>Special Requirements</label>
                      <textarea 
                        rows={3}
                        placeholder="Dietary needs, room preferences..."
                        style={{ 
                          width: "100%", background: "#040d1a",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: textWhite, padding: "12px 16px",
                          borderRadius: 6, outline: "none", resize: "none",
                          fontFamily: "'Jost', sans-serif" 
                        }}
                        onFocus={e => e.target.style.borderColor = textCyan}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
                      />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      style={{ 
                        background: "#0284c7", color: "#fff", border: "none",
                        padding: 16, borderRadius: 6, fontWeight: 600,
                        letterSpacing: 2, cursor: "pointer", marginTop: 10,
                        fontFamily: "'Jost', sans-serif" 
                      }}
                    >
                      CONFIRM RESERVATION
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </motion.div>
  )
}
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"

// Guaranteed Working Counter Component
function Counter({ value, suffix = "" }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasAnimated) {
        const rect = ref.current.getBoundingClientRect()
        if (rect.top <= window.innerHeight - 50 && rect.bottom >= 0) {
          setHasAnimated(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasAnimated])

  useEffect(() => {
    if (hasAnimated) {
      let start = 0
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepTime = duration / steps

      const timer = setInterval(() => {
        start += increment
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [hasAnimated, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const DESTINATIONS = [
  { 
    id: 1, name: "Santorini", country: "Greece", tag: "Most Loved", price: "$2,400", duration: "7 nights",
    img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=90",
    desc: "Whitewashed villages perched on volcanic cliffs above the shimmering Aegean. Watch the world's most celebrated sunsets from your private terrace.",
    highlights: ["Private cave villa", "Sunset cruise", "Wine tasting", "Caldera views"],
    mood: "Romantic & Iconic",
  },
  { 
    id: 2, name: "Maldives", country: "Indian Ocean", tag: "Luxury", price: "$4,800", duration: "10 nights",
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=90",
    desc: "Crystalline turquoise lagoons and overwater villas where the ocean floor is visible beneath your feet. Paradise is not a place — it's a feeling.",
    highlights: ["Overwater bungalow", "Underwater dining", "Dolphin watching", "Coral snorkeling"],
    mood: "Pure Escape",
  },
  { 
    id: 3, name: "Kyoto", country: "Japan", tag: "Cultural", price: "$3,100", duration: "8 nights",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=90",
    desc: "Ancient temples draped in cherry blossoms, bamboo forests whispering in the wind. Japan's spiritual heart beats softly here.",
    highlights: ["Tea ceremony", "Bamboo forest", "Geisha district", "Temple stays"],
    mood: "Serene & Spiritual",
  },
  { 
    id: 4, name: "Amalfi Coast", country: "Italy", tag: "Romantic", price: "$2,900", duration: "7 nights",
    img: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=90",
    desc: "Dramatic cliffside villages cascading into the sparkling Mediterranean. Every twist of the coastal road reveals another masterpiece.",
    highlights: ["Cliffside villa", "Limoncello tour", "Boat day trips", "Michelin dining"],
    mood: "Dolce Vita",
  },
  { 
    id: 5, name: "Bali", country: "Indonesia", tag: "Trending", price: "$1,800", duration: "9 nights",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=90",
    desc: "Emerald rice terraces, sacred temples and a spiritual serenity that slows the world down. Bali doesn't just refresh — it transforms.",
    highlights: ["Rice terrace trek", "Temple sunrise", "Spa retreat", "Cooking class"],
    mood: "Soul-Renewing",
  },
  { 
    id: 6, name: "Dubai", country: "UAE", tag: "Ultra Luxury", price: "$3,500", duration: "6 nights",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=90",
    desc: "Where the desert horizon meets a glittering skyline. Dubai redefines excess — in the most breathtaking way imaginable.",
    highlights: ["Burj suite", "Desert safari", "Gold souk", "Yacht dinner"],
    mood: "Bold & Spectacular",
  },
]

const EXPERIENCES = [
  { icon: "✈️", title: "Private Aviation", desc: "Fly in absolute comfort on our curated fleet of private jets and helicopters." },
  { icon: "🏨", title: "Ultra-Luxury Stays", desc: "Handpicked overwater villas, palace suites and cliffside retreats — only the finest." },
  { icon: "🍽️", title: "Fine Dining", desc: "Exclusive access to Michelin-starred tables and private chef experiences." },
  { icon: "🚢", title: "Yacht Charters", desc: "Explore hidden coastlines aboard our collection of luxury superyachts." },
  { icon: "📸", title: "Memory Makers", desc: "Professional photography to capture every extraordinary moment of your journey." },
  { icon: "🌟", title: "24/7 Concierge", desc: "Your dedicated travel architect — available around the clock, worldwide." },
]

export default function Home() {
  const [selectedDest, setSelectedDest] = useState(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [formDone, setFormDone] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormDone(true)
  }

  const oceanicBg = "#040d1a"
  const textWhite = "#ffffff"
  const textCyan = "#38bdf8"
  const textSubtle = "#cbd5e1"

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: oceanicBg, color: textSubtle }}
    >
      {/* HERO SECTION */}
      <section ref={heroRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <motion.div style={{ y: heroY, position: "absolute", inset: 0, scale: 1.1 }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
            style={{
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              opacity: videoLoaded ? 1 : 0,
              transition: "opacity 1.5s ease",
            }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,13,26,0.5) 0%, rgba(4,13,26,0.7) 60%, #040d1a 100%)" }} />

        <motion.div 
          style={{
            opacity: heroOpacity,
            position: "relative", zIndex: 2,
            height: "100%", display: "flex",
            flexDirection: "column", alignItems: "center",
            justifyContent: "center", textAlign: "center",
            padding: "0 24px",
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "8px 22px", borderRadius: 50,
              background: "rgba(4, 13, 26, 0.6)",
              border: "1px solid rgba(56, 189, 248, 0.4)",
              backdropFilter: "blur(12px)",
              marginBottom: 32,
            }}
          >
            <span style={{ 
              width: 6, height: 6, borderRadius: "50%", background: textCyan,
              boxShadow: "0 0 10px #38bdf8",
              animation: "pulse-ring 2s ease-out infinite" 
            }} />
            <span style={{ fontSize: 11, letterSpacing: 3, color: textCyan, textTransform: "uppercase", fontWeight: 600 }}>
              Redefining Ocean Luxury
            </span>
          </motion.div>

          <div style={{ overflow: "hidden", marginBottom: 4 }}>
            <motion.h1 
              initial={{ y: "110%", opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3.5rem,10vw,8rem)",
                fontWeight: 700, 
                color: textWhite,
                lineHeight: 1, letterSpacing: 2,
                textShadow: "none",
              }}
            >
              The Ocean
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden", marginBottom: 32 }}>
            <motion.h1 
              initial={{ y: "110%", opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3.5rem,10vw,8rem)",
                fontWeight: 400, lineHeight: 1,
                letterSpacing: 2, fontStyle: "italic",
                color: textWhite,
                textShadow: "none",
              }}
            >
              Is Yours
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
            style={{
              fontSize: "clamp(14px,1.8vw,18px)",
              color: textWhite,
              maxWidth: 580, margin: "0 auto 48px",
              lineHeight: 1.9, letterSpacing: 0.5,
              fontWeight: 300,
            }}
          >
            We don't just plan trips — we architect transformations.
            Every ocean escape curated for those who seek pure elegance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}
          >
            <Link to="/destinations" style={{ textDecoration: "none" }}>
              <motion.button 
                whileHover={{ scale: 1.04 }} 
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#0284c7",
                  color: "#ffffff",
                  border: "none",
                  boxShadow: "0 8px 25px rgba(2, 132, 199, 0.4)",
                  padding: "17px 40px", fontSize: 12, borderRadius: 6, letterSpacing: 2,
                  fontWeight: 600, cursor: "pointer"
                }}
              >
                <span>EXPLORE DESTINATIONS</span>
              </motion.button>
            </Link>

            <Link to="/story" style={{ textDecoration: "none" }}>
              <motion.button 
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.15)" }} 
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "rgba(4, 13, 26, 0.5)",
                  color: textWhite,
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(10px)",
                  padding: "17px 40px", fontSize: 12, borderRadius: 6, letterSpacing: 2,
                  fontWeight: 600, cursor: "pointer"
                }}
              >
                OUR STORY ↗
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2 }}
          style={{
            position: "absolute", bottom: 36, left: "50%",
            transform: "translateX(-50%)", zIndex: 10,
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 8,
          }}
        >
          <span style={{ 
            fontSize: 9, letterSpacing: 5,
            color: textWhite, textTransform: "uppercase", fontWeight: 600 
          }}>
            Discover
          </span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ 
              width: 2, height: 45,
              background: "linear-gradient(to bottom, #38bdf8, transparent)" 
            }}
          />
        </motion.div>
      </section>

      {/* TICKER */}
      <div style={{ background: "#081b33", padding: "14px 0", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="ticker" style={{ display: "flex", whiteSpace: "nowrap" }}>
          {[...Array(3)].map((_, idx) => (
            <span key={idx} style={{ display: "flex" }}>
              {["Santorini", "Maldives", "Kyoto", "Bali", "Dubai", "Amalfi", "Paris", "Swiss Alps", "Seychelles", "Tokyo"].map((s) => (
                <span 
                  key={s} 
                  style={{
                    fontSize: 11, letterSpacing: 4, color: textWhite,
                    textTransform: "uppercase", padding: "0 32px", fontWeight: 500,
                  }}
                >
                  {s} <span style={{ margin: "0 8px", color: textCyan }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* STATS SECTION */}
      <section style={{ 
        padding: "80px 48px", background: "#061326",
        borderBottom: "1px solid rgba(255,255,255,0.05)" 
      }}>
        <div style={{
          maxWidth: 960, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 24,
        }}>
          {[
            { target: 15000, suffix: "+", l: "Travelers Served", sub: "Across 6 continents" },
            { target: 80, suffix: "+", l: "Destinations", sub: "Handpicked globally" },
            { target: 12, suffix: "+", l: "Years of Excellence", sub: "Trusted since 2012" },
            { target: 100, suffix: "%", l: "Tailored Journeys", sub: "No two trips alike" },
          ].map((s, i) => (
            <ScrollReveal key={s.l} delay={i * 0.1}>
              <div style={{ textAlign: "center", padding: "24px 16px" }}>
                <div 
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                    fontWeight: 700, marginBottom: 6,
                    color: textWhite,
                  }}
                >
                  <Counter value={s.target} suffix={s.suffix} />
                </div>
                <div style={{ 
                  fontSize: 11, letterSpacing: 2,
                  color: textCyan, textTransform: "uppercase",
                  marginBottom: 4, fontWeight: 600
                }}>
                  {s.l}
                </div>
                <div style={{ fontSize: 11, color: "rgba(203,213,225,0.7)" }}>{s.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CURATED DESTINATIONS SECTION WITH HOVER & CLICK */}
      <section style={{ padding: "120px 48px", background: oceanicBg }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ 
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 20 
            }}>
              <div>
                <p style={{ 
                  fontSize: 10, letterSpacing: 5, color: textCyan,
                  textTransform: "uppercase", marginBottom: 14, fontWeight: 600
                }}>
                  ◆ Where Will You Go?
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(2.4rem,5vw,4rem)",
                  fontWeight: 700, color: textWhite, lineHeight: 1.1,
                }}>
                  Curated <br />
                  <span style={{ color: textCyan, fontStyle: "italic" }}>Destinations</span>
                </h2>
              </div>
              <Link to="/destinations" style={{ textDecoration: "none" }}>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                    color: textWhite,
                    border: "1px solid rgba(255,255,255,0.25)",
                    padding: "12px 28px", fontSize: 11, borderRadius: 6, letterSpacing: 2,
                    cursor: "pointer", fontWeight: 600, transition: "all 0.3s ease"
                  }}
                >
                  VIEW ALL →
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: 24,
          }}>
            {DESTINATIONS.map((dest, i) => (
              <ScrollReveal key={dest.id} delay={i * 0.08}>
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDest(dest)}
                  variants={{
                    initial: { y: 0, borderColor: "rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" },
                    hover: { y: -10, borderColor: "rgba(56, 189, 248, 0.4)", boxShadow: "0 20px 40px rgba(2, 132, 199, 0.25)" }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    background: "#081b33",
                    border: "1px solid",
                    borderRadius: 14, 
                    overflow: "hidden", 
                    cursor: "pointer",
                    position: "relative"
                  }}
                >
                  <div style={{ position: "relative", height: 280, overflow: "hidden" }}>
                    <motion.img 
                      src={dest.img} 
                      alt={dest.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.1 }
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    <div style={{ 
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, #081b33 0%, transparent 70%)" 
                    }} />

                    <div style={{
                      position: "absolute", top: 16, left: 16,
                      padding: "5px 14px", borderRadius: 20,
                      background: "rgba(2,132,199,0.9)",
                      backdropFilter: "blur(10px)",
                      fontSize: 9, letterSpacing: 2,
                      color: "#fff", textTransform: "uppercase", fontWeight: 600,
                    }}>
                      {dest.tag}
                    </div>

                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      padding: "5px 14px", borderRadius: 20,
                      background: "rgba(4,13,26,0.7)",
                      backdropFilter: "blur(10px)",
                      fontSize: 10, color: textSubtle, border: "1px solid rgba(255,255,255,0.15)"
                    }}>
                      🕐 {dest.duration}
                    </div>

                    <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                      <h3 style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: 28, fontWeight: 700,
                        color: textWhite, marginBottom: 4, lineHeight: 1,
                      }}>
                        {dest.name}
                      </h3>
                      <p style={{ 
                        fontSize: 10, letterSpacing: 3,
                        color: textCyan, textTransform: "uppercase", fontWeight: 600
                      }}>
                        {dest.country}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: "20px 24px 24px" }}>
                    <p style={{ 
                      fontSize: 13, color: textSubtle,
                      lineHeight: 1.8, marginBottom: 16, fontWeight: 300 
                    }}>
                      {dest.desc.substring(0, 100)}...
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ 
                          fontSize: 9, letterSpacing: 2,
                          color: "rgba(203,213,225,0.5)", textTransform: "uppercase" 
                        }}>
                          From
                        </span>
                        <div 
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: 22, fontWeight: 700,
                            color: textWhite
                          }}
                        >
                          {dest.price}
                        </div>
                      </div>

                      <motion.div
                        variants={{
                          initial: { x: 0, backgroundColor: "#0284c7" },
                          hover: { x: 4, backgroundColor: "#38bdf8" }
                        }}
                        style={{
                          color: "#fff",
                          padding: "10px 22px", fontSize: 10, borderRadius: 6,
                          fontWeight: 600, display: "flex", alignItems: "center", gap: 6
                        }}
                      >
                        <span>Explore</span>
                        <motion.span
                          variants={{
                            initial: { x: 0 },
                            hover: { x: 3 }
                          }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATION DETAIL MODAL */}
      <AnimatePresence>
        {selectedDest && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDest(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 500,
              background: "rgba(4,13,26,0.92)",
              backdropFilter: "blur(16px)",
              display: "flex", alignItems: "center",
              justifyContent: "center", padding: 20,
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 800, width: "100%",
                background: "#081b33",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 16, overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
                maxHeight: "90vh", overflowY: "auto",
              }}
            >
              <div style={{ position: "relative", height: 320 }}>
                <img 
                  src={selectedDest.img} 
                  alt={selectedDest.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ 
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, #081b33 0%, transparent 60%)" 
                }} />

                <button 
                  onClick={() => setSelectedDest(null)}
                  style={{
                    position: "absolute", top: 16, right: 16,
                    width: 40, height: 40, borderRadius: "50%",
                    background: "rgba(4,13,26,0.8)", backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: textWhite, fontSize: 18, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  ✕
                </button>

                <div style={{
                  position: "absolute", top: 16, left: 16,
                  padding: "6px 16px", borderRadius: 20,
                  background: "rgba(2,132,199,0.9)",
                  fontSize: 9, letterSpacing: 2, color: "#fff",
                  textTransform: "uppercase", fontWeight: 600,
                }}>
                  {selectedDest.tag}
                </div>

                <div style={{ position: "absolute", bottom: 20, left: 32 }}>
                  <p style={{ 
                    fontSize: 10, letterSpacing: 4,
                    color: textCyan, textTransform: "uppercase", marginBottom: 6, fontWeight: 600 
                  }}>
                    {selectedDest.country}
                  </p>
                  <h2 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(2rem,5vw,3.5rem)",
                    fontWeight: 700, color: textWhite,
                  }}>
                    {selectedDest.name}
                  </h2>
                </div>
              </div>

              <div style={{ padding: "32px" }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                  {[
                    { label: "Mood", val: selectedDest.mood },
                    { label: "Duration", val: selectedDest.duration },
                    { label: "From", val: selectedDest.price },
                  ].map((item) => (
                    <div 
                      key={item.label} 
                      style={{
                        padding: "10px 20px", borderRadius: 8,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <p style={{ 
                        fontSize: 8, letterSpacing: 3,
                        color: textCyan, textTransform: "uppercase", marginBottom: 3, fontWeight: 600 
                      }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 13, color: textWhite, fontWeight: 500 }}>{item.val}</p>
                    </div>
                  ))}
                </div>

                <p style={{
                  fontSize: 15, color: textSubtle,
                  lineHeight: 1.9, marginBottom: 28, fontWeight: 300,
                }}>
                  {selectedDest.desc}
                </p>

                <div style={{ marginBottom: 32 }}>
                  <p style={{ 
                    fontSize: 10, letterSpacing: 4, color: textWhite,
                    textTransform: "uppercase", marginBottom: 16, fontWeight: 600
                  }}>
                    ◆ What's Included
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {selectedDest.highlights.map((h) => (
                      <div 
                        key={h} 
                        style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "10px 14px", borderRadius: 8,
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <span style={{ color: textCyan, fontSize: 14 }}>✓</span>
                        <span style={{ fontSize: 13, color: textSubtle }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12 }}>
                  <Link 
                    to="/contact" 
                    style={{ textDecoration: "none", flex: 1 }}
                    onClick={() => setSelectedDest(null)}
                  >
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.97 }}
                      style={{
                        width: "100%", padding: "16px", fontSize: 12,
                        borderRadius: 8, letterSpacing: 2,
                        background: "#0284c7",
                        color: "#fff", border: "none", fontWeight: 600, cursor: "pointer"
                      }}
                    >
                      BOOK THIS JOURNEY →
                    </motion.button>
                  </Link>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedDest(null)}
                    style={{ 
                      padding: "16px 24px", fontSize: 12, borderRadius: 8,
                      background: "transparent", color: textWhite,
                      border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer"
                    }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MID VIDEO SECTION */}
      <section style={{ position: "relative", height: "65vh", overflow: "hidden" }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src="/mid.mp4" type="video/mp4" />
        </video>
        <div style={{ 
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(4,13,26,0.85), rgba(2,132,199,0.2))" 
        }} />
        <div style={{
          position: "relative", zIndex: 2,
          height: "100%", display: "flex",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px",
        }}>
          <ScrollReveal>
            <p style={{ 
              fontSize: 10, letterSpacing: 6, color: textCyan,
              textTransform: "uppercase", marginBottom: 20, fontWeight: 600
            }}>
              A Different Way To Travel
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(2.2rem,6vw,5rem)",
              color: textWhite, fontWeight: 700,
              lineHeight: 1.15, marginBottom: 24,
            }}>
              Every Moment<br />
              <span style={{ color: textCyan, fontStyle: "italic", fontWeight: 400 }}>
                Deliberately Crafted
              </span>
            </h2>
            <p style={{ 
              fontSize: 15, color: textSubtle,
              maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.9, fontWeight: 300 
            }}>
              We believe travel should transform you. Every detail — from the oceanic backdrop to private yacht escapes — is chosen with intention.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button 
                whileHover={{ scale: 1.04 }} 
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "#0284c7",
                  color: "#fff", border: "none",
                  padding: "17px 44px", fontSize: 12, borderRadius: 6, letterSpacing: 2,
                  fontWeight: 600, cursor: "pointer"
                }}
              >
                BEGIN YOUR JOURNEY
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPERIENCES SECTION */}
      <section style={{ padding: "120px 48px", background: "#061326" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <p style={{ 
                fontSize: 10, letterSpacing: 6, color: textCyan,
                textTransform: "uppercase", marginBottom: 14, fontWeight: 600
              }}>
                ◆ Exclusively Yours
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(2.2rem,5vw,3.8rem)",
                fontWeight: 700, color: textWhite,
              }}>
                Beyond Ordinary <span style={{ color: textCyan, fontStyle: "italic" }}>Experiences</span>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            gap: 16,
          }}>
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.title} delay={i * 0.09}>
                <motion.div 
                  whileHover={{ y: -8 }} 
                  style={{
                    background: "rgba(8,27,51,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "40px 32px", borderRadius: 12, textAlign: "center"
                  }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: 20,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 30,
                    margin: "0 auto 24px",
                  }}>
                    {exp.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 20, color: textWhite,
                    marginBottom: 12, fontWeight: 600,
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{ 
                    fontSize: 13, color: textSubtle,
                    lineHeight: 1.8, fontWeight: 300 
                  }}>
                    {exp.desc}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section style={{ padding: "100px 48px", background: oceanicBg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ 
                fontSize: 10, letterSpacing: 6, color: textCyan,
                textTransform: "uppercase", marginBottom: 14, fontWeight: 600
              }}>
                ◆ Start Planning
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(2rem,4vw,3.2rem)",
                color: textWhite, fontWeight: 700,
              }}>
                Craft Your <span style={{ color: textCyan, fontStyle: "italic" }}>Dream Journey</span>
              </h2>
            </div>
          </ScrollReveal>

          {formDone ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ textAlign: "center", padding: 60 }}
            >
              <div style={{ fontSize: 64, marginBottom: 20 }}>✈️</div>
              <h3 style={{ 
                fontFamily: "'Playfair Display',serif",
                fontSize: 32, color: textWhite, marginBottom: 12 
              }}>
                Journey Request Received!
              </h3>
              <p style={{ color: textSubtle, fontSize: 14 }}>
                Your personal travel architect will be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <ScrollReveal>
              <form onSubmit={handleSubmit}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr)) auto",
                  gap: 12, alignItems: "end",
                }}>
                  {[
                    { ph: "Where to?", label: "Destination", type: "text" },
                    { ph: "Travel date", label: "Departure", type: "date" },
                    { ph: "Return date", label: "Return", type: "date" },
                    { ph: "2 travelers", label: "Guests", type: "number" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label style={{ 
                        fontSize: 9, letterSpacing: 3, color: textCyan,
                        textTransform: "uppercase", display: "block", marginBottom: 8, fontWeight: 600
                      }}>
                        {f.label}
                      </label>
                      <input 
                        type={f.type} 
                        placeholder={f.ph}
                        style={{
                          width: "100%",
                          background: "#081b33",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: textWhite, padding: "15px 18px",
                          fontSize: 13, outline: "none", borderRadius: 8,
                          fontFamily: "'Jost',sans-serif",
                          transition: "border-color 0.3s",
                        }} 
                      />
                    </div>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                      padding: "16px 32px",
                      fontSize: 12,
                      borderRadius: 8,
                      letterSpacing: 2,
                      height: "50px",
                      background: "#0284c7",
                      color: "#fff",
                      border: "none",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    REQUEST JOURNEY
                  </motion.button>
                </div>
              </form>
            </ScrollReveal>
          )}
        </div>
      </section>
    </motion.div>
  )
}
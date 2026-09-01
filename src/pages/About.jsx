import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import ScrollReveal from "../components/ScrollReveal"
import Footer from "../components/Footer"

const VALUES = [
  { icon:"💎", title:"Bespoke Perfection",    desc:"No pre-packaged itineraries. Every detail is custom-built around your personal desires, pace, and lifestyle." },
  { icon:"🌐", title:"Global Access",          desc:"Private island rentals, closed-door museum access, and Michelin-star private dining arranged seamlessly." },
  { icon:"🛡️", title:"Uncompromising Safety", desc:"Round-the-clock risk management, private transport, and dedicated local hosts at every destination." },
  { icon:"🌿", title:"Sustainable Horizons",  desc:"We actively invest in ocean conservation and support eco-conscious, zero-trace luxury travel." },
]

const TIMELINE = [
  { year:"2012", title:"The Maiden Voyage", desc:"Founded in Monaco with a vision to redefine luxury ocean travel for elite travelers." },
  { year:"2016", title:"Global Expansion",  desc:"Expanded to over 50 destinations, introducing private yacht charter services." },
  { year:"2020", title:"Bespoke Aviation",  desc:"Launched private jet integration for door-to-door luxury transport solutions." },
  { year:"2024", title:"Eco-Oceanic",       desc:"Pledged 2% of profits to marine habitat restoration and sustainable tourism." },
]

const TEAM = [
  { name:"Alexander Vance", role:"Founder & CEO",             img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", bio:"Former luxury hospitality architect with 18+ years of global curation experience." },
  { name:"Elena Rostova",   role:"Head of Private Charters",  img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80", bio:"Sailing veteran specializing in ultra-luxury yachting across the Mediterranean." },
  { name:"Marcus Chen",     role:"Global Experience Director", img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80", bio:"Curator of rare culture & culinary access across Asia and South America." },
]

export default function About() {
  const [activeTab, setActiveTab] = useState("mission")
  const textCyan   = "#38bdf8"
  const textWhite  = "#ffffff"
  const textSubtle = "#cbd5e1"

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.5 }} style={{ backgroundColor:"#040d1a", color:textSubtle }}>

      {/* ── HERO ── */}
      <div style={{
        position:"relative", height:"65vh", overflow:"hidden",
        display:"flex", alignItems:"center", justifyContent:"center",
        paddingTop:"80px",  // ← fix
      }}>
        <video autoPlay muted loop playsInline
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}>
          <source src="/hero.mp4" type="video/mp4"/>
        </video>
        <div style={{ position:"absolute", inset:0,
          background:"linear-gradient(to bottom, rgba(4,13,26,0.5) 0%, rgba(4,13,26,0.85) 80%, #040d1a 100%)" }}/>
        <div style={{ position:"relative", zIndex:2, textAlign:"center", padding:"0 20px" }}>
          <motion.span initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }}
            transition={{ delay:0.2 }}
            style={{ fontSize:10, letterSpacing:6, color:textCyan,
              textTransform:"uppercase", fontWeight:600, display:"block", marginBottom:12 }}>
            ◆ Redefining Modern Travel
          </motion.span>
          <motion.h1 initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }}
            transition={{ delay:0.4 }}
            style={{ fontFamily:"'Playfair Display', serif",
              fontSize:"clamp(2.8rem,8vw,6rem)", color:textWhite,
              fontWeight:700, lineHeight:1.1 }}>
            About{" "}
            <span style={{ color:textCyan, fontStyle:"italic" }}>Voyagé</span>
          </motion.h1>
        </div>
      </div>

      {/* ── STORY ── */}
      <section style={{ padding:"80px 40px 100px", background:"#040d1a" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center", maxWidth:800, margin:"0 auto 60px" }}>
              <p style={{ fontSize:10, letterSpacing:5, color:textCyan,
                textTransform:"uppercase", fontWeight:600, marginBottom:14 }}>
                ◆ Our Essence
              </p>
              <h2 style={{ fontFamily:"'Playfair Display', serif",
                fontSize:"clamp(2.2rem,5vw,3.8rem)", color:textWhite,
                fontWeight:700, lineHeight:1.25, marginBottom:24 }}>
                Crafting Extraordinary Journeys Since 2012
              </h2>
              <p style={{ fontSize:16, color:textSubtle, lineHeight:1.9, fontWeight:300 }}>
                Voyagé was born out of a desire to eliminate the mundane from travel. We believe luxury isn't just about opulent accommodations — it's about seamless execution, private access, and creating deeply personal memories that linger long after the journey ends.
              </p>
            </div>
          </ScrollReveal>

          {/* Tab Box */}
          <ScrollReveal delay={0.1}>
            <div style={{ background:"#081b33", borderRadius:16, padding:40,
              border:"1px solid rgba(255,255,255,0.1)",
              boxShadow:"0 20px 50px rgba(0,0,0,0.4)" }}>
              <div style={{ display:"flex", justifyContent:"center",
                gap:16, marginBottom:32, flexWrap:"wrap" }}>
                {[{ id:"mission",label:"OUR MISSION" },{ id:"vision",label:"OUR VISION" },{ id:"promise",label:"OUR PROMISE" }].map(tab=>(
                  <button key={tab.id} onClick={()=>setActiveTab(tab.id)}
                    style={{
                      background: activeTab===tab.id ? "#0284c7" : "transparent",
                      color:textWhite,
                      border: activeTab===tab.id ? "1px solid #0284c7" : "1px solid rgba(255,255,255,0.2)",
                      padding:"10px 24px", borderRadius:30,
                      fontSize:11, letterSpacing:2,
                      fontWeight:600, cursor:"pointer", transition:"all 0.3s",
                    }}>{tab.label}</button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab}
                  initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-10 }} transition={{ duration:0.3 }}
                  style={{ textAlign:"center", maxWidth:750, margin:"0 auto", minHeight:100 }}>
                  {activeTab==="mission"&&<p style={{ fontSize:15, color:textSubtle, lineHeight:1.9, fontWeight:300 }}>"To design transformative bespoke expeditions that connect discerning travelers with the world's most serene, breathtaking, and exclusive destinations — without a single moment of compromise."</p>}
                  {activeTab==="vision"&&<p style={{ fontSize:15, color:textSubtle, lineHeight:1.9, fontWeight:300 }}>"To be recognized globally as the undisputed benchmark in luxury ocean travel, pioneering sustainable marine exploration while setting new standards in personalized concierge service."</p>}
                  {activeTab==="promise"&&<p style={{ fontSize:15, color:textSubtle, lineHeight:1.9, fontWeight:300 }}>"Unmatched attention to detail. 24/7 dedicated travel architects. Complete discretion and absolute peace of mind from departure to return."</p>}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding:"100px 40px", background:"#061326",
        borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center", marginBottom:64 }}>
              <p style={{ fontSize:10, letterSpacing:5, color:textCyan,
                textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>
                ◆ Why Choose Voyagé
              </p>
              <h2 style={{ fontFamily:"'Playfair Display', serif",
                fontSize:"clamp(2.2rem,5vw,3.5rem)", color:textWhite, fontWeight:700 }}>
                Our Core <span style={{ color:textCyan, fontStyle:"italic" }}>Pillars</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:24 }}>
            {VALUES.map((val,i)=>(
              <ScrollReveal key={val.title} delay={i*0.08}>
                <motion.div whileHover={{ y:-8 }}
                  style={{ background:"#081b33", padding:"36px 28px",
                    borderRadius:14, border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ fontSize:32, marginBottom:20 }}>{val.icon}</div>
                  <h3 style={{ fontFamily:"'Playfair Display', serif",
                    fontSize:20, color:textWhite, marginBottom:12, fontWeight:600 }}>{val.title}</h3>
                  <p style={{ fontSize:13, color:textSubtle, lineHeight:1.8, fontWeight:300 }}>{val.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ padding:"100px 40px", background:"#040d1a" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center", marginBottom:70 }}>
              <p style={{ fontSize:10, letterSpacing:5, color:textCyan,
                textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>◆ Our Legacy</p>
              <h2 style={{ fontFamily:"'Playfair Display', serif",
                fontSize:"clamp(2.2rem,5vw,3.5rem)", color:textWhite, fontWeight:700 }}>
                The Voyagé <span style={{ color:textCyan, fontStyle:"italic" }}>Timeline</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))", gap:20 }}>
            {TIMELINE.map((item,i)=>(
              <ScrollReveal key={item.year} delay={i*0.1}>
                <div style={{ background:"#081b33", padding:"30px 24px",
                  borderRadius:12, borderLeft:`3px solid ${textCyan}` }}>
                  <div style={{ fontFamily:"'Playfair Display', serif",
                    fontSize:28, color:textCyan, fontWeight:700, marginBottom:8 }}>{item.year}</div>
                  <h4 style={{ fontSize:16, color:textWhite, fontWeight:600, marginBottom:8 }}>{item.title}</h4>
                  <p style={{ fontSize:12, color:textSubtle, lineHeight:1.7, fontWeight:300 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding:"100px 40px 120px", background:"#061326" }}>
        <div style={{ maxWidth:1280, margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign:"center", marginBottom:64 }}>
              <p style={{ fontSize:10, letterSpacing:5, color:textCyan,
                textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>
                ◆ Experts Behind The Journeys
              </p>
              <h2 style={{ fontFamily:"'Playfair Display', serif",
                fontSize:"clamp(2.2rem,5vw,3.5rem)", color:textWhite, fontWeight:700 }}>
                Leadership <span style={{ color:textCyan, fontStyle:"italic" }}>Team</span>
              </h2>
            </div>
          </ScrollReveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:32 }}>
            {TEAM.map((m,i)=>(
              <ScrollReveal key={m.name} delay={i*0.1}>
                <motion.div whileHover={{ y:-8 }}
                  style={{ background:"#081b33", borderRadius:14,
                    overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ height:280, overflow:"hidden", position:"relative" }}>
                    <img src={m.img} alt={m.name}
                      style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                    <div style={{ position:"absolute", inset:0,
                      background:"linear-gradient(to top, #081b33 0%, transparent 60%)" }}/>
                  </div>
                  <div style={{ padding:24 }}>
                    <h3 style={{ fontFamily:"'Playfair Display', serif",
                      fontSize:22, color:textWhite, fontWeight:700 }}>{m.name}</h3>
                    <p style={{ fontSize:10, letterSpacing:2, color:textCyan,
                      textTransform:"uppercase", fontWeight:600, marginBottom:12 }}>{m.role}</p>
                    <p style={{ fontSize:13, color:textSubtle, lineHeight:1.7, fontWeight:300 }}>{m.bio}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding:"80px 40px",
        background:"linear-gradient(135deg,#0284c7 0%,#040d1a 100%)",
        textAlign:"center" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <ScrollReveal>
            <h2 style={{ fontFamily:"'Playfair Display', serif",
              fontSize:"clamp(2rem,4vw,3.2rem)", color:textWhite,
              fontWeight:700, marginBottom:16 }}>
              Ready To Architect Your Private Escape?
            </h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.8)",
              marginBottom:32, fontWeight:300 }}>
              Speak with one of our senior travel advisors today.
            </p>
            <Link to="/contact" style={{ textDecoration:"none" }}>
              <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                style={{ background:textWhite, color:"#040d1a", border:"none",
                  padding:"16px 36px", fontSize:11, borderRadius:6,
                  fontWeight:700, letterSpacing:2, cursor:"pointer" }}>
                REQUEST PRIVATE CONSULTATION →
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer/>
    </motion.div>
  )
}
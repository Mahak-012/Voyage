import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"
import Footer from "../components/Footer"

const STORIES = [
  { id:1, title:"Chasing the Midnight Sun in Norway",      author:"Elena Vance",       role:"Explorer & Photographer", date:"August 12, 2025",   readTime:"5 min read", tag:"Arctic Voyage",    img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=90",  excerpt:"Floating through icy fjords under a sky that never turns dark — a surreal encounter with pure arctic magic.", fullStory:"We set sail from Tromsø at midnight. The sun hung low over the horizon, casting a soft golden-rose light across the arctic ocean. There was no sound except the gentle swell of waves against the hull. In that timeless moment, surrounded by snow-capped peaks rising vertically from the sea, I realized true luxury isn't about grand hotels — it's about absolute, uninterrupted peace." },
  { id:2, title:"Lost in the Coral Gardens of Raja Ampat", author:"Marcus Chen",        role:"Marine Biologist",        date:"June 28, 2025",     readTime:"7 min read", tag:"Diving & Wildlife", img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=90", excerpt:"Diving into the most biodiverse marine sanctuary on Earth, where every reef tells a million-year-old secret.", fullStory:"Raja Ampat is unlike anywhere else on this planet. Descending into the sapphire depths, I was instantly surrounded by schooling manta rays and vibrant coral structures untouched by time. Our luxury liveaboard yacht allowed us to anchor in remote lagoons where no tourists had set foot for months." },
  { id:3, title:"A Night Under Amalfi's Starlit Cliffs",   author:"Sophia Laurent",    role:"Luxury Travel Writer",    date:"May 15, 2025",      readTime:"4 min read", tag:"Coastal Luxury",   img:"https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=90",  excerpt:"Sipping vintage Limoncello on a cliffside terrace in Positano as the Mediterranean hums below.", fullStory:"The private villa perched 300 meters above Positano felt suspended between the sky and the sea. As evening fell, the coastal town lit up like a constellation of warm golden stars. With private chef dining and classical guitar playing softly — this was the Italian dream brought to vivid life." },
  { id:4, title:"Overwater Whispers in the Maldives",     author:"David & Clara Ross", role:"Honeymooners",            date:"February 14, 2025", readTime:"6 min read", tag:"Romantic Escape",  img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=90", excerpt:"Waking up to glass floors, private infinity pools, and dolphins swimming past our bedroom deck.", fullStory:"From the moment our seaplane touched down in the lagoon, we knew this was special. Our overwater bungalow had direct ocean access, private butler service, and an underwater dining experience that left us speechless. It wasn't just a trip — it was the ultimate celebration of our love." },
]

export default function OurStory() {
  const [activeStory, setActiveStory] = useState(null)
  const textCyan   = "#38bdf8"
  const textWhite  = "#ffffff"
  const textSubtle = "#cbd5e1"

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.6 }}
      style={{ backgroundColor:"#040d1a", color:textSubtle, minHeight:"100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        position:"relative",
        padding:"160px 24px 80px",  // ← fix — top padding zyada
        textAlign:"center",
        background:"#061326",
        borderBottom:"1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            style={{ fontSize:11, letterSpacing:4, color:textCyan,
              textTransform:"uppercase", fontWeight:600, marginBottom:16 }}>
            ◆ REAL EXPEDITIONS & TALES
          </motion.p>
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.2 }}
            style={{ fontFamily:"'Playfair Display', serif",
              fontSize:"clamp(2.5rem,6vw,4.5rem)", color:textWhite,
              lineHeight:1.15, marginBottom:24 }}>
            Stories Written By<br/>
            <span style={{ color:textCyan, fontStyle:"italic" }}>
              The Ocean & The Wandering
            </span>
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.3 }}
            style={{ fontSize:16, color:textSubtle, lineHeight:1.8,
              fontWeight:300, maxWidth:600, margin:"0 auto" }}>
            Step into the personal journals of explorers, voyagers, and travelers who experienced extraordinary journeys curated by us.
          </motion.p>
        </div>
      </section>

      {/* ── STORIES GRID ── */}
      <section style={{ maxWidth:1200, margin:"80px auto 100px", padding:"0 24px" }}>
        <div style={{ display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(350px,1fr))", gap:32 }}>
          {STORIES.map((story,i)=>(
            <ScrollReveal key={story.id} delay={i*0.1}>
              <motion.div whileHover={{ y:-8 }}
                onClick={()=>setActiveStory(story)}
                style={{ background:"#081b33", border:"1px solid rgba(255,255,255,0.1)",
                  borderRadius:16, overflow:"hidden", cursor:"pointer",
                  display:"flex", flexDirection:"column", height:"100%",
                  boxShadow:"0 10px 30px rgba(0,0,0,0.4)" }}>

                <div style={{ position:"relative", height:240, overflow:"hidden" }}>
                  <img src={story.img} alt={story.title}
                    style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                  <div style={{ position:"absolute", top:16, left:16,
                    background:"rgba(2,132,199,0.9)", color:"#fff",
                    padding:"4px 12px", borderRadius:20,
                    fontSize:10, letterSpacing:2,
                    textTransform:"uppercase", fontWeight:600 }}>
                    {story.tag}
                  </div>
                </div>

                <div style={{ padding:28, display:"flex", flexDirection:"column", flexGrow:1 }}>
                  <div style={{ fontSize:11, color:textCyan, marginBottom:10,
                    display:"flex", gap:12 }}>
                    <span>{story.date}</span>
                    <span>•</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Playfair Display', serif",
                    fontSize:22, color:textWhite, marginBottom:12, lineHeight:1.3 }}>
                    {story.title}
                  </h3>
                  <p style={{ fontSize:13, color:textSubtle, lineHeight:1.7,
                    fontWeight:300, marginBottom:20, flexGrow:1 }}>
                    {story.excerpt}
                  </p>
                  <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)",
                    paddingTop:16, display:"flex",
                    justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <p style={{ fontSize:12, color:textWhite, fontWeight:600 }}>{story.author}</p>
                      <p style={{ fontSize:10, color:"rgba(203,213,225,0.6)" }}>{story.role}</p>
                    </div>
                    <span style={{ color:textCyan, fontSize:12, fontWeight:600 }}>
                      Read Story →
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── STORY MODAL ── */}
      <AnimatePresence>
        {activeStory && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={()=>setActiveStory(null)}
            style={{ position:"fixed", inset:0, zIndex:500,
              background:"rgba(4,13,26,0.92)", backdropFilter:"blur(16px)",
              display:"flex", alignItems:"center",
              justifyContent:"center", padding:20 }}>
            <motion.div
              initial={{ scale:0.9, opacity:0, y:30 }}
              animate={{ scale:1, opacity:1, y:0 }}
              exit={{ scale:0.9, opacity:0, y:30 }}
              onClick={e=>e.stopPropagation()}
              style={{ maxWidth:750, width:"100%", background:"#081b33",
                border:"1px solid rgba(255,255,255,0.15)", borderRadius:16,
                overflow:"hidden", maxHeight:"90vh", overflowY:"auto",
                boxShadow:"0 30px 80px rgba(0,0,0,0.8)" }}>

              <div style={{ position:"relative", height:300 }}>
                <img src={activeStory.img} alt={activeStory.title}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
                <div style={{ position:"absolute", inset:0,
                  background:"linear-gradient(to top, #081b33 0%, transparent 70%)" }}/>
                <button onClick={()=>setActiveStory(null)}
                  style={{ position:"absolute", top:16, right:16,
                    width:36, height:36, borderRadius:"50%",
                    background:"rgba(4,13,26,0.8)",
                    border:"1px solid rgba(255,255,255,0.2)",
                    color:textWhite, fontSize:16, cursor:"pointer",
                    display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
                <div style={{ position:"absolute", bottom:20, left:28, right:28 }}>
                  <span style={{ fontSize:10, letterSpacing:2, color:textCyan,
                    textTransform:"uppercase", fontWeight:600 }}>{activeStory.tag}</span>
                  <h2 style={{ fontFamily:"'Playfair Display', serif",
                    fontSize:28, color:textWhite, marginTop:4 }}>{activeStory.title}</h2>
                </div>
              </div>

              <div style={{ padding:32 }}>
                <div style={{ display:"flex", justifyContent:"space-between",
                  alignItems:"center", marginBottom:24, paddingBottom:16,
                  borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
                  <div>
                    <p style={{ fontSize:14, color:textWhite, fontWeight:600 }}>{activeStory.author}</p>
                    <p style={{ fontSize:11, color:textCyan }}>{activeStory.role}</p>
                  </div>
                  <div style={{ fontSize:11, color:"rgba(203,213,225,0.6)" }}>
                    {activeStory.date} • {activeStory.readTime}
                  </div>
                </div>
                <p style={{ fontSize:16, color:textSubtle, lineHeight:1.9,
                  fontWeight:300, marginBottom:32 }}>{activeStory.fullStory}</p>
                <div style={{ textAlign:"right" }}>
                  <button onClick={()=>setActiveStory(null)}
                    style={{ background:"#0284c7", color:"#fff", border:"none",
                      padding:"12px 28px", borderRadius:6, fontSize:12,
                      fontWeight:600, cursor:"pointer", letterSpacing:1 }}>
                    CLOSE STORY
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer/>
    </motion.div>
  )
}
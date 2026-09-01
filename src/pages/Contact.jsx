import { useState } from "react"
import { motion } from "framer-motion"
import ScrollReveal from "../components/ScrollReveal"
import Footer from "../components/Footer"

const CONTACT_INFO = [
  { icon:"📍", title:"Global Headquarters", detail:"Monaco Marina Pier 4, MC 98000" },
  { icon:"📞", title:"Direct Concierge",    detail:"+377 98 98 00 00 / WhatsApp Available" },
  { icon:"✉️", title:"Inquiries",           detail:"concierge@voyage-ocean.com" },
  { icon:"🌐", title:"Service Hours",       detail:"24/7 Worldwide Concierge Desk" },
]

export default function Contact() {
  const [done,     setDone]     = useState(false)
  const [tripType, setTripType] = useState("Private Charter")
  const textCyan   = "#38bdf8"
  const textWhite  = "#ffffff"
  const textSubtle = "#cbd5e1"

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.5 }} style={{ backgroundColor:"#040d1a", color:textSubtle }}>

      {/* ── HERO ── */}
      <div style={{
        position:"relative", height:"55vh", overflow:"hidden",
        display:"flex", alignItems:"center", justifyContent:"center",
        paddingTop:"80px",  // ← fix
      }}>
        <video autoPlay muted loop playsInline
          style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}>
          <source src="/hero.mp4" type="video/mp4"/>
        </video>
        <div style={{ position:"absolute", inset:0,
          background:"linear-gradient(to bottom, rgba(4,13,26,0.6) 0%, #040d1a 100%)" }}/>
        <div style={{ position:"relative", zIndex:2, textAlign:"center", padding:"0 20px" }}>
          <span style={{ fontSize:10, letterSpacing:5, color:textCyan,
            textTransform:"uppercase", fontWeight:600, display:"block", marginBottom:12 }}>
            ◆ Direct Line To Luxury
          </span>
          <h1 style={{ fontFamily:"'Playfair Display', serif",
            fontSize:"clamp(2.5rem,7vw,5.5rem)", color:textWhite,
            fontWeight:700, lineHeight:1.1 }}>
            Get In <span style={{ color:textCyan, fontStyle:"italic" }}>Touch</span>
          </h1>
        </div>
      </div>

      {/* ── INFO CARDS ── */}
      <section style={{ padding:"40px 40px 0", background:"#040d1a" }}>
        <div style={{ maxWidth:1200, margin:"0 auto",
          display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:20 }}>
          {CONTACT_INFO.map((info,i)=>(
            <ScrollReveal key={info.title} delay={i*0.08}>
              <div style={{ background:"#081b33", padding:"24px 20px",
                borderRadius:12, border:"1px solid rgba(255,255,255,0.08)",
                textAlign:"center" }}>
                <div style={{ fontSize:26, marginBottom:10 }}>{info.icon}</div>
                <h4 style={{ fontSize:11, letterSpacing:2, color:textCyan,
                  textTransform:"uppercase", fontWeight:600, marginBottom:6 }}>{info.title}</h4>
                <p style={{ fontSize:13, color:textWhite, fontWeight:300 }}>{info.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FORM ── */}
      <section style={{ padding:"80px 40px 120px", background:"#040d1a" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <ScrollReveal>
            <div style={{ background:"#081b33", padding:"48px 40px",
              borderRadius:20, border:"1px solid rgba(255,255,255,0.12)",
              boxShadow:"0 30px 80px rgba(0,0,0,0.6)" }}>

              {done ? (
                <motion.div initial={{ scale:0.9, opacity:0 }}
                  animate={{ scale:1, opacity:1 }}
                  style={{ textAlign:"center", padding:"40px 20px" }}>
                  <div style={{ fontSize:60, marginBottom:16 }}>⚓</div>
                  <h3 style={{ fontFamily:"'Playfair Display', serif",
                    fontSize:32, color:textWhite, marginBottom:12 }}>
                    Consultation Requested!
                  </h3>
                  <p style={{ color:textSubtle, fontSize:15, lineHeight:1.8 }}>
                    Your dedicated travel architect will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div style={{ textAlign:"center", marginBottom:36 }}>
                    <p style={{ fontSize:10, letterSpacing:4, color:textCyan,
                      textTransform:"uppercase", fontWeight:600, marginBottom:8 }}>
                      ◆ Personal Travel Architect
                    </p>
                    <h2 style={{ fontFamily:"'Playfair Display', serif",
                      fontSize:"clamp(2rem,4vw,2.8rem)", color:textWhite, fontWeight:700 }}>
                      Start Planning Your{" "}
                      <span style={{ color:textCyan, fontStyle:"italic" }}>Voyage</span>
                    </h2>
                  </div>

                  <form onSubmit={e=>{e.preventDefault();setDone(true)}}
                    style={{ display:"flex", flexDirection:"column", gap:20 }}>

                    {/* Trip type pills */}
                    <div>
                      <label style={{ fontSize:10, letterSpacing:2, color:textCyan,
                        textTransform:"uppercase", display:"block",
                        marginBottom:10, fontWeight:600 }}>Experience Interest</label>
                      <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                        {["Private Charter","Luxury Villa","Tailored Itinerary","Private Jet"].map(type=>(
                          <button key={type} type="button"
                            onClick={()=>setTripType(type)}
                            style={{
                              background: tripType===type ? "#0284c7" : "rgba(255,255,255,0.03)",
                              color:textWhite,
                              border: tripType===type ? "1px solid #38bdf8" : "1px solid rgba(255,255,255,0.1)",
                              padding:"10px 18px", borderRadius:30,
                              fontSize:11, cursor:"pointer", transition:"all 0.3s",
                            }}>{type}</button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
                      {[
                        { label:"Full Name *",     type:"text",  ph:"Lord / Lady / Mr. / Ms.", req:true },
                        { label:"Email Address *", type:"email", ph:"client@domain.com",        req:true },
                        { label:"Phone / WhatsApp *",type:"tel", ph:"+1 (555) 000-0000",        req:true },
                        { label:"Preferred Destination",type:"text",ph:"Amalfi, Maldives, Kyoto",req:false },
                      ].map(f=>(
                        <div key={f.label}>
                          <label style={{ fontSize:10, letterSpacing:2, color:textCyan,
                            textTransform:"uppercase", display:"block",
                            marginBottom:6, fontWeight:600 }}>{f.label}</label>
                          <input required={f.req} type={f.type} placeholder={f.ph}
                            style={{ width:"100%", background:"#040d1a",
                              border:"1px solid rgba(255,255,255,0.15)",
                              color:textWhite, padding:"14px 18px", fontSize:13,
                              outline:"none", borderRadius:8,
                              fontFamily:"'Jost',sans-serif" }}
                            onFocus={e=>e.target.style.borderColor=textCyan}
                            onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.15)"}/>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label style={{ fontSize:10, letterSpacing:2, color:textCyan,
                        textTransform:"uppercase", display:"block",
                        marginBottom:6, fontWeight:600 }}>Tell Us About Your Vision</label>
                      <textarea required rows={4}
                        placeholder="Dates, number of guests, specific preferences..."
                        style={{ width:"100%", background:"#040d1a",
                          border:"1px solid rgba(255,255,255,0.15)",
                          color:textWhite, padding:"14px 18px", fontSize:13,
                          outline:"none", borderRadius:8, resize:"none",
                          fontFamily:"'Jost',sans-serif" }}
                        onFocus={e=>e.target.style.borderColor=textCyan}
                        onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.15)"}/>
                    </div>

                    <motion.button whileHover={{ scale:1.02, backgroundColor:"#38bdf8" }}
                      whileTap={{ scale:0.98 }} type="submit"
                      style={{ padding:16, fontSize:11, borderRadius:8,
                        background:"#0284c7", color:textWhite, border:"none",
                        fontWeight:600, letterSpacing:2, cursor:"pointer", marginTop:10,
                        fontFamily:"'Jost',sans-serif" }}>
                      SEND CONSULTATION REQUEST →
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer/>
    </motion.div>
  )
}
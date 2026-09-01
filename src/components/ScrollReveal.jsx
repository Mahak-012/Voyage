import { motion } from "framer-motion"

export default function ScrollReveal({ children, delay=0, y=50, x=0, scale=1, className="" }) {
  return (
    <motion.div className={className}
      initial={{ opacity:0, y, x, scale }}
      whileInView={{ opacity:1, y:0, x:0, scale:1 }}
      viewport={{ once:true, margin:"-80px" }}
      transition={{ duration:0.85, delay, ease:[0.22,1,0.36,1] }}>
      {children}
    </motion.div>
  )
}
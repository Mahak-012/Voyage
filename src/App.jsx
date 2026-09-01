import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Navbar       from "./components/Navbar"
import Home         from "./pages/Home"
import Destinations from "./pages/Destinations"
import About        from "./pages/About"
import Contact      from "./pages/Contact"
import OurStory     from "./pages/OurStory"

function ScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<Home />}         />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about"        element={<About />}        />
        <Route path="/contact"      element={<Contact />}      />
        <Route path="/story"        element={<OurStory />}     />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero"
import './App.css'
// import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function App() {
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from("#loader h3", {
      x: 50,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    })
    tl.to("#loader h3", {
      x: -10,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
    tl.to("#loader", {
      opacity: 0,
    })
    tl.to("#loader", {
      display: "none",
    })

    
  })



  return (
    <><div id="loader">
      <h3>Welcome</h3>
      <h3>Bycycle&apos;s</h3>
      <h3>Brand®️</h3>
    </div>
      <div className="mainPage">
        <Navigation />
        <Hero />
      </div>
    </>
  )
}

export default App

import { useGSAP } from "@gsap/react"
import styles from "./Navigation.module.css"
import gsap from "gsap"


const Navigation = () => {
useGSAP(()=>{
   gsap.from("nav h5 span",{
    opacity:0,
    duration:0.7,
    y:-150,
    stagger: 0.1,
    delay:4
   })

   
   gsap.from("nav ul a",{
    y:- 200,
    opacity:0,
    duration:0.7,
    stagger: 0.1,
    delay:4
   })


})

    return (
        <nav id="content">
            <div className={styles.logo}>
                <h5>
                    <span>B</span>
                    <span>Y</span>
                    <span>C</span>
                    <span>Y</span>
                    <span>C</span>
                    <span>L</span>
                    <span>E</span>
                </h5>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navigation

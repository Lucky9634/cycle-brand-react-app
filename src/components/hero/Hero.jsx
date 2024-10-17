import { useGSAP } from "@gsap/react"
import styles from "./Hero.module.css"
import gsap from "gsap"

const Hero = () => {
    useGSAP(()=>{
        gsap.from("h1",{
            opacity:0,
            x: -200,
            delay:4.5,
            duration:0.6
        })
        gsap.from("p",{
            opacity:0,
            x: -200,
            delay:4.5,
            duration:0.7,
            stagger:0.1
        })
        gsap.from("button",{
            opacity:0,
            y: 200,
            delay:4.7,
            duration:0.8,
            stagger:0.1
        })
        gsap.from("img",{
            opacity:0,
            x: 200,
            delay:5,
            duration:0.9,
        })
    })
    return (
        <div className={styles.hero}>
            <div className={styles.leftContainer}>
                <h1>Ride Into Advanture..!</h1>
                <p>qrbiter electronic bike.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusantium eius corporis provident cumque cupiditate eos officia quibusdam.</p>
                <button type="button">Buy it</button>
            </div>
            <div className={styles.rightContainer}>
                <img src="cycle-brand-react-app/back.png" alt="Cycle" />
            </div>

        </div>
    )
}

export default Hero

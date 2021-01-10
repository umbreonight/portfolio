import { useState } from "react"
import { useRouter } from 'next/router'
import FloatingActionButton from "./floating-action-button"
import styles from "./launcher.module.scss"

export default function Launcher({ title, className = "", subtitle, logo }) {
    const [start, setStart] = useState(false);
    const router = useRouter()

    const handleClick = (e) => {
        setStart(true)
        console.log(start)
        setTimeout(() => {
            console.log("9 seconds have passed")
            router.push("/welcome")
        }, 9000)
    }

    if (start) {
        className = styles.launcher + " " + styles.isStarted
    } else {
        className = styles.launcher
    }

    return (
        <div className={className}>
            <LauncherBackground start={start} />
            <div className={styles.launcherContent}>
                {!!logo && <img className={styles.launcherLogo} src={logo} alt="app_logo"></img>}
                <h2 className={styles.launcherTitle}>{title}{!!subtitle && <small className={styles.launcherSubtitle}>{subtitle}</small>}</h2>
                <LauncherTextAnimation />
            </div>
            <div className={styles.launcherAction}>
                <FloatingActionButton icon="play_arrow" className={styles.launcherButton} onClick={handleClick} />
            </div>
        </div>
    )
}

const LauncherBackground = ({ start, className }) => {
    return (
        <div className={styles.launcherBackground}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

const LauncherTextAnimation = ({ }) => {
    return (
        <div className={styles.launcherTextAnimation}>
            <span>Dream</span>
            <span>Design</span>
            <span>Develop</span>
        </div>
    )
}
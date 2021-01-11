import { useState, useEffect } from "react"
import useScrollPosition from "@react-hook/window-scroll";
import { useRouter } from 'next/router'
import Icon from "components/icon"
import styles from "./app-bar.module.scss"

export default function AppBar({ back }) {
    const scrollY = useScrollPosition(60);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        if (scrollY >= 40) {
            setIsCollapsed(true)
        } else {
            setIsCollapsed(false)
        }
    }, [scrollY])

    return (
        <header className={styles["app-bar"] + " " + (isCollapsed ? styles["is-collapsed"] : "")}>
            <div className={styles.container}>
                {!!back && <Back />}
                <img src={"/images/logo192.png"} height="40" width="40" alt="app-logo" className={styles["app-bar-logo"]} />
            </div>
        </header>

    );
}

const Back = () => {
    const router = useRouter()

    return (
        <button className={styles["app-bar-back"]} onClick={() => router.back()}>
            <Icon name="keyboard_arrow_left" className="icon-36" />
            Back
        </button>
    )
}
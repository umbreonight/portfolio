import styles from "./scroll-indicator.module.scss"
import Icon from "components/icon"

export default function ScrollIndicator() {
    return (
        <div className={styles.scrollIndicator}>
            <Icon name="keyboard_arrow_down" />
        </div>
    )
}
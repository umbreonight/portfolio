import Icon from "./icon"
import styles from "./floating-action-button.module.scss"

export default function FloatingActionButton({icon, className="", onClick}) {
    return (
        <button className={styles.floatingActionButton + " " + className} onClick={onClick}>
            <Icon name={icon} />
        </button>
    )
}
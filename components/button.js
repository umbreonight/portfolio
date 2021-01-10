import styles from "./button.module.scss"
import cn from 'classnames'

export default function Button({ type="button", text, disabled }) {
    return (
        <button type={type} className={cn(styles.button, { [styles["is-disabled"]]: disabled })}>
            {text}
        </button>
    )
}
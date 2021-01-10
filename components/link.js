import Link from 'next/link'
import styles from "./link.module.scss"

export default function MyLink({ href, text }) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}
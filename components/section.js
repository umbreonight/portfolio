import styles from "./section.module.scss"

export default function Section({ children, className }) {
    return (
        <section className={className}>
            {children}
        </section>
    )
}

export function SectionTitle({ text }) {
    return (
        <div className={styles.sectionTitle}>
            <h2>{text}</h2>
            {/* <hr className={styles.sectionTitleDivider}></hr> */}
        </div>
    )
}
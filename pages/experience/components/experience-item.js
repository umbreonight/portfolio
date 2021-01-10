import styles from "./experience-item.module.scss"

export default function ExperienceItem({ employer, position, duration, tags = [], overview, duties = [] }) {
    return (
        <div className={styles.experienceItem}>
            <span className={styles.experienceItemDuration}>{duration}</span>
            <h4 className={styles.experienceItemTitle}>{employer}</h4>
            <h6 className={styles.experienceItemSubtitle}>{position}</h6>
            {!!overview && <p className={styles.experienceItemOverview}>{overview}</p>}
        </div>
    )
}
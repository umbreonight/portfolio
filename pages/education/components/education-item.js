import styles from "./education-item.module.scss"

export default function EducationItem({ school, course, duration, tags = [], overview, duties = [] }) {
    return (
        <div className={styles.educationItem}>
            <span className={styles.educationItemDuration}>{duration}</span>
            <h4 className={styles.educationItemTitle}>{course}</h4>
            <h6 className={styles.educationItemSubtitle}>{school}</h6>
            {!!overview && <p className={styles.educationItemOverview}>{overview}</p>}
        </div>
    )
}
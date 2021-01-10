import styles from "./project.module.scss"

export const Project = ({ title, subtitle, image, tags = [], description }) => {
    return (
        <div className={styles.project}>
            <div className={styles.projectImage}>
                <img src={image}></img>
            </div>
            <div className={styles["project-details"]}>
                <h4 className={styles.projectTitle}>{title}</h4>
                <h6 className={styles.projectSubtitle}>{subtitle}</h6>
                {!!description && <p>{description}</p>}
            </div>
        </div>
    )
}

export default function Projects({ children }) {
    return (
        <div className={styles.projects}>
            {children}
        </div>
    )
}
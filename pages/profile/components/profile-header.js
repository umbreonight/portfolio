import styles from "./profile-header.module.scss"

export default function ProfileHeader ({title, subtitle, image}) {
    return (
        <div className={styles.profileHeader}>
            <div className={styles.profileImage}>
                <img src={image} alt=""></img>
            </div>
            <h3 className={styles.profileName}>
                {title}
                <small>{subtitle}</small>
            </h3>
        </div>
    )
}
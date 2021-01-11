import styles from "./profile-contact.module.scss"
import Icon from "components/icon"

export default function ProfileContact() {
    return (
        <div className={styles.profileSkills}>
            <div className={styles.profileSkillsItem}>
                <Icon name="phone" />
            </div>
            <div className={styles.profileSkillsItem}>
                <Icon name="email" />
            </div>
            <div className={styles.profileSkillsItem}>
                <Icon name="message" />
            </div>
        </div>
    )
}
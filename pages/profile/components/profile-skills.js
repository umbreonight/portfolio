import styles from "./profile-skills.module.scss"
import Icon from "components/icon"

export default function ProfileSkills() {
    return (
        <div className={styles.profileSkills}>
            <div className={styles.profileSkillsItem}>
                <Icon name="phone" />
            </div>
            <div className={styles.profileSkillsItem}>
                <Icon name="phone" />
            </div>
            <div className={styles.profileSkillsItem}>
                <Icon name="phone" />
            </div>
        </div>
    )
}
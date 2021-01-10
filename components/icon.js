import styles from "./icon.module.scss"

export default function Icon ({className="", name}) {
  return (
    <i className={styles["icon"]}>{name}</i>
  );
};

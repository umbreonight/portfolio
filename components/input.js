import { useState } from "react"
import styles from "./input.module.scss"

export default function Input({ type, name, id, placeholder, required, label, helper }) {

    const [value, setValue] = useState()

    return (
        <div className={styles.input}>
            <input
                type={type}
                name={name}
                id={id}
                value={value || ""}
                onChange={(event) => { setValue(event.target.value) }}
                placeholder={placeholder}
                required={required ? true : false}
            ></input>
            {!!label && <label htmlFor={id}>{label}</label>}
            {!!helper && <span className={styles.helper}>{helper}</span>}
        </div>
    );
};

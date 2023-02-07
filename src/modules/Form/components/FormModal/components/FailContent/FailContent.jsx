import styles from "./FailContent.module.css"

export function FailContent() {
    return (
        <p className={styles.info}>
            Ошибка!
            <br /> Попробуйте еще раз!
        </p>
    )
}

import React from "react";
import styles from "./Form.module.css";
import { Button } from "modules/common/ui/Button";

export default function Form() {
    function submited(event) {
        event.preventDefault();
        console.log("dsadsa");
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={submited} className={styles.container}>
                <p className={styles.title}>Оставить заявку</p>
                <input
                    className={styles.inputs}
                    type="text"
                    placeholder="Введите Ваше имя"
                />
                <input
                    className={styles.inputs}
                    type="number"
                    placeholder="Введите Ваш телефон"
                />
                <Button className={styles.btn}>Запись нах</Button>
            </form>
        </div>
    );
}

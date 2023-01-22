import React, { useState } from "react";
import styles from "./Form.module.css";
import { Button } from "modules/common/ui/Button";

export default function Form() {
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");

    function submited(event) {
        event.preventDefault();
        console.log(name, tel);
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={submited} className={styles.container}>
                <p className={styles.title}>Оставить заявку</p>
                <input
                    className={styles.inputs}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Введите Ваше имя"
                />
                <input
                    className={styles.inputs}
                    type="number"
                    value={tel}
                    onChange={e => setTel(e.target.value)}
                    placeholder="Введите Ваш телефон"
                />
                <Button className={styles.btn}>Записаться</Button>
            </form>
        </div>
    );
}

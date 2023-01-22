import React, { useState } from "react"
import styles from "./Form.module.css"
import { Button } from "modules/common/ui/Button"
import { GratitudeModal } from "modules/GratitudeModal"

export default function Form() {
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [showGratitudeModal, setShowGratitudeModal] = useState(false)

    function submitHandler(event) {
        event.preventDefault()
        console.log(name, tel)
        setShowGratitudeModal(true)
    }

    return (
        <div className={styles.formWrapper}>
            <GratitudeModal
                showGratitudeModal={showGratitudeModal}
                setShowGratitudeModal={setShowGratitudeModal}
            />
            <form onSubmit={submitHandler} className={styles.container}>
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
    )
}

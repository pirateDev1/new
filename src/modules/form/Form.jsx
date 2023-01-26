import React, { useState } from "react"
import styles from "./Form.module.css"
import { Button } from "modules/common/ui/Button"
import { GratitudeModal } from "modules/GratitudeModal"

export default function Form() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [showGratitudeModal, setShowGratitudeModal] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)

    const handleNameChange = e => {
        e.preventDefault()
        setName(e.target.value)
        setNameError(false)
    }

    const formatPhone = phone => {
        if (phone === "+") return "+"
        if (phone.length === 1) return `+${phone}`
        return phone
    }

    const handlePhoneChange = e => {
        e.preventDefault()

        setPhone(formatPhone(e.target.value))
        setPhoneError(false)
    }

    const submitHandler = e => {
        e.preventDefault()

        const nameRegEx = /^[a-zа-яё\s]+$/iu
        const phoneRegEx = /^[+()-\d ]+$/

        if (!nameRegEx.test(name)) {
            setNameError(true)
            return
        }

        if (!phoneRegEx.test(phone)) {
            setPhoneError(true)
            return
        }

        setShowGratitudeModal(true)
        setNameError(false)
        setPhoneError(false)
    }

    return (
        <div className={styles.wrapper} id="form">
            <div className={styles.container}>
                <GratitudeModal
                    showGratitudeModal={showGratitudeModal}
                    setShowGratitudeModal={setShowGratitudeModal}
                />
                <form onSubmit={submitHandler} className={styles.form}>
                    <p className={styles.title}>Оставить заявку</p>
                    <div className={styles.inputWrap}>
                        <input
                            className={
                                nameError ? styles.inpError : styles.inputs
                            }
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Введите Ваше имя"
                        />
                        {nameError && (
                            <p className={styles.error}>*Введите Ваше имя</p>
                        )}
                    </div>
                    <div className={styles.inputWrap}>
                        <input
                            className={
                                nameError ? styles.inpError : styles.inputs
                            }
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Введите Ваш телефон"
                        />
                        {phoneError && (
                            <p className={styles.error}>
                                *Введите корректный номер телефона
                            </p>
                        )}
                    </div>
                    <Button className={styles.btn}>Записаться</Button>
                </form>
            </div>
        </div>
    )
}

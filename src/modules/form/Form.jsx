import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import styles from "./Form.module.css"
import { Button } from "modules/common/ui/Button"
import { GratitudeModal } from "./components/GratitudeModal"

export default function Form() {
    const formRef = useRef()

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

    const sendEmail = () => {
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_USER_ID
            )
            .then(
                result => {
                    setShowGratitudeModal(true)
                    setName("")
                    setPhone("")
                    setNameError(false)
                    setPhoneError(false)
                },
                error => {
                    console.log(error.text)
                }
            )
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

        sendEmail()
    }

    return (
        <div className={styles.wrapper} id="form">
            <div className={styles.container}>
                <GratitudeModal
                    showGratitudeModal={showGratitudeModal}
                    setShowGratitudeModal={setShowGratitudeModal}
                />
                <form
                    onSubmit={submitHandler}
                    className={styles.form}
                    ref={formRef}
                >
                    <div className={styles.formContainer}>
                        <p className={styles.title}>Оставить заявку</p>
                        <div className={styles.inputWrap}>
                            <input
                                className={`${styles.inputs} ${
                                    nameError ? styles.inpError : ""
                                }`}
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Введите Ваше имя"
                            />
                            {nameError && (
                                <p className={styles.error}>
                                    *Введите Ваше имя
                                </p>
                            )}
                        </div>
                        <div className={styles.inputWrap}>
                            <input
                                className={`${styles.inputs} ${
                                    phoneError ? styles.inpError : ""
                                }`}
                                type="text"
                                name="phone"
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
                        <div className={styles.formBtn}><Button className={styles.btn}>Записаться</Button>
                        <p className={styles.freeOffer}>*Бесплатно, до 28 февраля</p></div>                        
                    </div>
                </form>
            </div>
        </div>
    )
}

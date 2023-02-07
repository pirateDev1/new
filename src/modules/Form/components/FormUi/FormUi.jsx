import { FreeOffer } from "modules/common/components/FreeOffer"
import { Button } from "modules/common/ui/Button"
import React from "react"
import styles from "./FormUi.module.css"

export function FormUi({
    submitHandler,
    handleNameChange,
    handlePhoneChange,
    formRef,
    nameError,
    phoneError,
    name,
    phone,
}) {
    return (
        <form onSubmit={submitHandler} className={styles.form} ref={formRef}>
            <div className={styles.formContainer}>
                <p className={styles.title}>Оставить заявку</p>
                <div className={styles.inputWrap}>
                    <input
                        id="nameInput"
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
                        <p className={styles.error}>*Введите Ваше имя</p>
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
                <div className={styles.formBtn}>
                    <Button className={styles.btn}>Записаться</Button>
                    <FreeOffer />
                </div>
            </div>
        </form>
    )
}

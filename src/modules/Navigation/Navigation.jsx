import React from "react"
import styles from "./Navigation.module.css"
import { Burger } from "./components/Burger"
import { Logo } from "./components/Logo"
import { Navbar } from "./components/Navbar"

function Navigation() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo />
                <Navbar />
                <Burger />
            </div>
        </div>
    )
}

export default Navigation

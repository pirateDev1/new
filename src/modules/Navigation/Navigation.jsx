import React from "react"
import styles from "./Navigation.module.css"

import { Burger, Logo, Navbar } from "./components"

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

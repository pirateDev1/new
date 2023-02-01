import React from "react"
import styles from "./Navigation.module.css"

import { Burger, Navbar } from "./components"
import { Logo } from "modules/common/components/Logo"

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

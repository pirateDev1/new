import { CtaButton } from "modules/common/components/CtaButton"
import React from "react"
import styles from "./BurgerCta.module.css"

function BurgerCta({ closeClickHandler }) {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Наша цель — дать вам необходимые {"\n"}
                знания в удобном для вас формате,{"\n"}
                независимо от того, где вы находитесь{"\n"}и какие гаджеты есть
                под рукой
            </p>
            <CtaButton variant="outlined" onClick={closeClickHandler}>
                Записаться
            </CtaButton>
        </div>
    )
}

export default BurgerCta

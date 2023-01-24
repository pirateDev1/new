import { CtaButton } from "modules/common/components/CtaButton"
import React from "react"
import styles from "./BurgerCta.modules.css"

function BurgerCta({ closeClickHandler }) {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                Наша цель — дать вам необходимые {"\n"}
                знания в удобном для вас формате,{"\n"}
                независимо от того, где вы находитесь{"\n"}и какие гаджеты есть
                под рукой
            </p>
            <CtaButton onClick={closeClickHandler}>Заказать</CtaButton>
        </div>
    )
}

export default BurgerCta

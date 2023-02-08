import React from "react"
import styles from "./ScrollToTopBtn.module.css"
import { FiArrowUp } from "react-icons/fi"

function ScrollToTopBtn() {
  function clickHandler() {
    const mainEl = document.querySelector("#main")
    mainEl.scrollIntoView()
  }

  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      <FiArrowUp className={styles.icon} />
    </div>
  )
}

export default ScrollToTopBtn

import React from "react"
import styles from "./CustomLicense.module.css"

function CustomLicense() {
    return (
        <div className={styles.license}>
            <img
                src="https://static.tildacdn.com/tild3666-6137-4266-a263-366661646262/smalllogo.svg"
                alt=""
            />
            <p>Государственная образовательная лицензия</p>
        </div>
    )
}

export default CustomLicense

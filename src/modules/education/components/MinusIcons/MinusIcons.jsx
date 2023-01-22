import React from "react";
import styles from "./MinusIcons.module.css";

import { AiOutlineMinusCircle } from "react-icons/ai";

export default function MinusIcons() {
    return (
        <>
            <AiOutlineMinusCircle
                className={`${styles.icon} ${styles.outline}`}
            />
        </>
    );
}

import React from "react";
import styles from "./MinusIcons.module.css";

import { AiOutlineMinusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function MinusIcons() {
    return (
        <>
            <AiOutlineMinusCircle
                className={`${styles.icon} ${styles.outline}`}
            />
            <AiFillMinusCircle className={`${styles.icon} ${styles.fill}`} />
        </>
    );
}

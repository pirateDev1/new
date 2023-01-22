import React from "react";
import styles from "./PlusIcons.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function PlusIcons() {
    return (
        <>
            <AiOutlinePlusCircle
                className={`${styles.icon} ${styles.outline}`}
            />
        </>
    );
}

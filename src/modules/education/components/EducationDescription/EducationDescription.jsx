import React from "react";
import styles from "./EducationDescription.module.css";
import { MinusIcons } from "../MinusIcons";
import { PlusIcons } from "../PlusIcons";

export default function EducationDescription({
    index,
    data,
    selectedOption,
    setSelectedOption,
}) {
    const { title, desc } = data;
    const i = (index + 1).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });

    return (
        <li className={styles.container}>
            <div className={styles.infoContainer}>
                <p className={styles.number}>{i}.</p>
                <h4 className={styles.title}>{title}</h4>
                {selectedOption === index && (
                    <p className={styles.description}>{desc}</p>
                )}
            </div>
            <div
                className={styles.iconContainer}
                onClick={() => setSelectedOption(index)}
            >
                {selectedOption === index ? <MinusIcons /> : <PlusIcons />}
            </div>
        </li>
    );
}

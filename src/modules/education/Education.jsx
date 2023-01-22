import React, { useState } from "react";
import styles from "./Education.module.css";
import { EducationDescription } from "./components/EducationDescription";
import { educationData } from "./data";

export default function Education() {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Lacinia quis vel eros tempor orci.</h2>
            <ul className={styles.content}>
                {educationData.map((item, index) => (
                    <EducationDescription
                        key={item.id}
                        data={item}
                        index={index}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                ))}
            </ul>
        </section>
    );
}

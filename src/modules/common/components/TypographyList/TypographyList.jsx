import React from "react"

function TypographyList({ data, wrapperClassName, itemClassName }) {
    if (!Array.isArray(data)) {
        return null
    }

    return (
        <ul className={wrapperClassName}>
            {data.map((item, index) => {
                return (
                    <li className={itemClassName} key={`li${index}`}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default TypographyList

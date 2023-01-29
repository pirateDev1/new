import React from "react"

function TypographyList({ data, variant, wrapperClassName, itemClassName }) {
    if (!Array.isArray(data)) {
        return null
    }

    const typography = data.map((item, index) => {
        return (
            <li className={itemClassName} key={`li${index}`}>
                {item}
            </li>
        )
    })

    switch (variant) {
        case "ul":
            return <ul className={wrapperClassName}>{typography}</ul>
        case "ol":
            return <ol className={wrapperClassName}>{typography}</ol>
        default:
            return <ul className={wrapperClassName}>{typography}</ul>
    }
}

export default TypographyList

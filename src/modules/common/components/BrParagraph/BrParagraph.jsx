import React from "react"

function BrParagraph({ children, className }) {
    return (
        <p
            className={className}
            dangerouslySetInnerHTML={{
                __html: children.replace(/\n/g, "<br />"),
            }}
        />
    )
}

export default BrParagraph

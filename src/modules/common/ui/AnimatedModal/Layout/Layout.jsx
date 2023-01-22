import React from "react"
import { useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"

import styles from "./styles.module.css"
import animationStyles from "./animation.module.css"
import { ANIMATION_TIME } from "../const"

const overlayAnimation = {
    enter: animationStyles.overlayEnter,
    enterActive: animationStyles.overlayEnterActive,
    exit: animationStyles.overlayExit,
    exitActive: animationStyles.overlayExitActive,
}

const contentAnimation = {
    enter: animationStyles.contentEnter,
    enterActive: animationStyles.contentEnterActive,
    exit: animationStyles.contentExit,
    exitActive: animationStyles.contentExitActive,
}

export const Layout = ({ onClose, children, opened, innerClassName }) => {
    const overlayRef = useRef()
    const contentRef = useRef()

    const [animationIn, setAnimationIn] = useState(false)

    useEffect(() => {
        setAnimationIn(opened)
    }, [opened])

    return (
        <div className={styles.container}>
            <CSSTransition
                in={animationIn}
                nodeRef={overlayRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={overlayAnimation}
            >
                <div
                    ref={overlayRef}
                    className={styles.overlay}
                    onClick={onClose}
                />
            </CSSTransition>
            <CSSTransition
                in={animationIn}
                nodeRef={contentRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={contentAnimation}
            >
                <div
                    ref={contentRef}
                    className={innerClassName ? innerClassName : styles.content}
                >
                    {children}
                </div>
            </CSSTransition>
        </div>
    )
}

import { Portal } from "modules/common/components/Portal"
import { ANIMATION_TIME } from "./const"
import React from "react"
import { useMount } from "./useMount"
import { Layout } from "./Layout/Layout"

function AnimatedModal({ children, opened, onClose, innerClassName }) {
    const { mounted } = useMount(opened, ANIMATION_TIME)

    if (!mounted) {
        return null
    }

    return (
        <Portal>
            <Layout
                onClose={onClose}
                opened={opened}
                innerClassName={innerClassName}
            >
                {children}
            </Layout>
        </Portal>
    )
}

export default AnimatedModal

import {LayoutAnimation} from "react-native"

const customAnimation = {
    // set the animation for changing visibleSection
    duration: 750, // Duration in milliseconds.
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 0.4,
        duration: 700,
    },
    update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
    },
    delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
        duration: 100,
    },
}

export default customAnimation

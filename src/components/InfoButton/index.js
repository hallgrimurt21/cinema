import React from "react"
import {Pressable, Text} from "react-native"
import styles from "./styles"
import useHandleToggle from "../../utils/useHandleToggle"
import {useSelector} from "react-redux"

const InfoButton = ({section}) => {
    const handleToggle = useHandleToggle()
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )

    return (
        <Pressable
            style={({pressed}) => [
                {opacity: pressed ? 0.5 : 1},
                visibleSection === section
                    ? styles.activeButton
                    : styles.botButton,
            ]}
            onPress={() => handleToggle(section)}
        >
            <Text
                style={
                    visibleSection === section
                        ? styles.activeButtonText
                        : styles.botButText
                }
            >
                {section.charAt(0).toUpperCase() + section.slice(1)}
            </Text>
        </Pressable>
    )
}

export default InfoButton

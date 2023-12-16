import React from "react"
import {Pressable, Text} from "react-native"
import styles from "./styles"
import useHandleToggle from "../../utils/useHandleToggle"

const InfoButton = ({visibleSection, section}) => {
    const handleToggle = useHandleToggle()

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

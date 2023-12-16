import React, {useEffect, useRef} from "react"
import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    Animated,
    LayoutAnimation,
} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {toggleDescription} from "../../redux/features/visibilitySlice"
import styles from "./styles"
import {useNavigation} from "@react-navigation/native"
import {strongGrey} from "../../styles/colors"

const CinemaDetails = ({id}) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0 -- used for animations
    const cinemas = useSelector((state) => state.cinemas.cinemas) // Get the cinemas from the redux store
    const cinema = cinemas.find((cinema) => cinema.id === id) // Find the cinema with the id
    const descriptionVisible = useSelector(
        // Get the descriptionVisible from the redux store
        (state) => state.visibility.descriptionVisible,
    )

    const handleBack = () => {
        navigation.goBack()
        if (descriptionVisible) {
            dispatch(toggleDescription())
        }
    }

    useEffect(() => {
        // Animate the description
        Animated.timing(fadeAnim, {
            toValue: descriptionVisible ? 1 : 0,
            duration: 500,
            useNativeDriver: true,
        }).start()
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    }, [descriptionVisible])

    const buttonStyle = {
        backgroundColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", strongGrey], // Change the colors as per your need
        }),
        borderColor: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "black"], // Change the colors as per your need
        }),
    }

    return (
        <SafeAreaView style={styles.header}>
            <SafeAreaView style={styles.padder}></SafeAreaView>

            <View style={styles.topPart}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => {
                        handleBack()
                    }}
                >
                    <Text style={styles.backBtnText}>Back</Text>
                </Pressable>
                <View style={styles.rightPart}>
                    <Text style={styles.name}>{cinema.name}</Text>
                </View>
                <Animated.View style={[buttonStyle, styles.animButton]}>
                    <Pressable
                        style={
                            descriptionVisible
                                ? styles.infoButtonToggled
                                : styles.infoButton
                        }
                        onPress={() => dispatch(toggleDescription())}
                    >
                        <Text style={styles.infoButText}>Info</Text>
                    </Pressable>
                </Animated.View>
            </View>
            {descriptionVisible && (
                <Animated.View style={{...styles.info, opacity: fadeAnim}}>
                    <Text style={styles.description}>{cinema.description}</Text>
                    <View style={styles.bottomPart}>
                        <View style={styles.leftPart}>
                            <Text style={styles.address}>
                                {cinema["address\t"]}, {cinema.city}
                            </Text>
                            <Text style={styles.website}>{cinema.website}</Text>
                        </View>
                        <View style={styles.rightPart}>
                            <Text style={styles.phone}>{cinema.phone}</Text>
                        </View>
                    </View>
                </Animated.View>
            )}
        </SafeAreaView>
    )
}

export default CinemaDetails

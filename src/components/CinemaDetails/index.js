import React, {useEffect, useRef} from "react"
import {
    View,
    Text,
    Pressable,
    SafeAreaView,
    Animated,
    LayoutAnimation,
    Platform,
} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {toggleDescription} from "../../redux/features/visibilitySlice"
import styles from "./styles"
import {useNavigation} from "@react-navigation/native"
import {mediumGrey, strongWhite} from "../../styles/colors"

const CinemaDetails = ({id}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0
    const buttonAnim = useRef(new Animated.Value(0)).current // Initial value for button: 0
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const cinemas = useSelector((state) => state.cinemas.cinemas)
    const cinema = cinemas.find((cinema) => cinema.id === id)
    const descriptionVisible = useSelector(
        (state) => state.visibility.descriptionVisible,
    )

    const handleBack = () => {
        navigation.goBack()
        if (descriptionVisible) {
            dispatch(toggleDescription())
        }
    }

    useEffect(() => {
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
            outputRange: ["transparent", mediumGrey], // Change the colors as per your need
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

import React from "react"
import {View, Text, Pressable, SafeAreaView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {toggleDescription} from "../../redux/features/visibilitySlice"
import styles from "./styles"
import {useNavigation} from "@react-navigation/native"

const CinemaDetails = ({id}) => {
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

    return (
        <SafeAreaView style={styles.header}>
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
            </View>
            {descriptionVisible && (
                <View style={styles.info}>
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
                </View>
            )}
        </SafeAreaView>
    )
}

export default CinemaDetails

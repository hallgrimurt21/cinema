import React from "react"
import {Linking, Text, TouchableOpacity, View} from "react-native"
import {ScrollView} from "react-native-gesture-handler"
import {useSelector} from "react-redux"
import {useNavigation} from "@react-navigation/native"

import {deviceHeight} from "../../styles/sizes"
import styles from "./styles"

const CinemaList = () => {
    const navigate = useNavigation().navigate
    const cinemas = useSelector((state) => state.cinemas.cinemas)

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{
                paddingTop: deviceHeight * 0.12,
                paddingBottom: 100,
            }}
        >
            <View>
                {cinemas.map((cinema, index) => (
                    <View key={cinema.id} style={styles.buttons}>
                        <TouchableOpacity
                            style={styles.cinemaContainer}
                            onPress={() =>
                                navigate("Cinema Screen", {id: cinema.id})
                            }
                        >
                            <Text style={styles.cinemaName}>{cinema.name}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={async() => {
                                const url = `https://${cinema.website}`
                                const supported = await Linking.canOpenURL(url)

                                if (supported) {
                                    await Linking.openURL(url)
                                } else {
                                    Alert.alert(
                                        `Don't know how to open this URL: ${url}`,
                                    )
                                }
                            }}
                            style={styles.linkContainer}
                        >
                            <View style={styles.linkTextCont}>
                                <Text style={styles.cinemaWebsite}>
                                    {cinema.website}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default CinemaList

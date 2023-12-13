import React from "react"
import {useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Linking} from "react-native"
import {useNavigation} from "@react-navigation/native"
import styles from "./styles"
import {ScrollView} from "react-native-gesture-handler"

const CinemaList = () => {
    const navigate = useNavigation().navigate
    const cinemas = useSelector((state) => state.cinemas.cinemas)

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{paddingTop: 100}}
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
                            onPress={async () => {
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
                            <Text style={styles.cinemaWebsite}>
                                {cinema.website}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default CinemaList

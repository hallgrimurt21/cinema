import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import styles from "./styles"
import {strongGrey} from "../../styles/colors"

function CustomTabBar({state, descriptors, navigation}) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined ?
                        options.tabBarLabel :
                        options.title !== undefined ?
                            options.title :
                            route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name)
                    }
                }
                const tabStyle = {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{
                            ...tabStyle,
                            opacity: isFocused ? 1 : 0.5,
                            backgroundColor: isFocused ?
                                strongGrey :
                                "transparent",
                        }}
                    >
                        {route.name === "Cinemas" ? (
                            <View>
                                <Text
                                    style={{
                                        color: isFocused ? "white" : "white",
                                        fontSize: 14,
                                        textShadowColor: "rgba(0, 0, 0, 0.75)",
                                        textShadowOffset: {
                                            width: -1,
                                            height: 1,
                                        },
                                        textShadowRadius: 10,
                                    }}
                                >
                                    {label}
                                </Text>
                            </View>
                        ) : route.name === "Movies" ? (
                            <View>
                                <Text
                                    style={{
                                        color: isFocused ? "white" : "white",
                                        fontSize: 14,
                                        textShadowColor: "rgba(0, 0, 0, 0.75)",
                                        textShadowOffset: {
                                            width: -1,
                                            height: 1,
                                        },
                                        textShadowRadius: 10,
                                    }}
                                >
                                    {label}
                                </Text>
                            </View>
                        ) : (
                            <Text
                                style={{
                                    color: isFocused ? "white" : "white",
                                    fontSize: 14,
                                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                                    textShadowOffset: {width: -1, height: 1},
                                    textShadowRadius: 10,
                                }}
                            >
                                {label}
                            </Text>
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default CustomTabBar

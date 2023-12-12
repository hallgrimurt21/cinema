/* eslint-disable require-jsdoc */
import React from "react"
import {View, Text, TouchableOpacity, ImageBackground} from "react-native"


function CustomTabBar({state, descriptors, navigation}) {
    return (
        <View style={{flexDirection: "row", backgroundColor: "black", height: 80}}>
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
                    borderRightWidth: index === state.routes.length - 1 ? 0 : 1,
                    borderColor: "black",
                }
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={onPress}
                        style={{...tabStyle, opacity: isFocused ? 1 : 0.5}}
                    >
                        {route.name === "Cinemas" ? (
                            <ImageBackground
                                source={{uri: "https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg"}}
                                style={{...tabStyle, width: "100%", height: "100%"}}
                            >
                                <Text style={{color: isFocused ? "white" : "grey", fontSize: 14, textShadowColor: "rgba(0, 0, 0, 0.75)", textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10}}>
                                    {label}
                                </Text>
                            </ImageBackground>
                        ) : route.name === "Upcoming Movies" ? (
                            <ImageBackground
                                source={{uri: "https://shspublications.com/wp-content/uploads/2023/02/938EC347-405F-4FF1-B447-40BDDEE91026_1_201_a.jpeg"}}
                                style={{...tabStyle, width: "100%", height: "100%"}}
                            >
                                <Text style={{color: isFocused ? "white" : "grey", fontSize: 14, textShadowColor: "rgba(0, 0, 0, 0.75)", textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10}}>
                                    {label}
                                </Text>
                            </ImageBackground>
                        ) : (
                            <Text style={{color: isFocused ? "white" : "grey", fontSize: 14, textShadowColor: "rgba(0, 0, 0, 0.75)", textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10}}>
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

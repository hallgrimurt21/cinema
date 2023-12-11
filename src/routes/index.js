import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Main from "../views/Main"
import Movie from "../views/Movie"

const Tab = createBottomTabNavigator()
/**
 * Nacigates between Views.
 *
 * @return {JSX.Element} The Routes component.
 */
function Routes() {
    const TabOptions = {}

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Movie" screenOptions={TabOptions}>
                <Tab.Screen name="Movie" component={Movie} />
                <Tab.Screen name="Main" component={Main} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes

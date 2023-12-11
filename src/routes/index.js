import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Main from "../views/Main"

const Tab = createBottomTabNavigator()
/**
 * Nacigates between Views.
 *
 * @return {JSX.Element} The Routes component.
 */
function Routes() {
    const TabOptions = {
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Main"
                screenOptions={TabOptions}
            >
                <Tab.Screen name="Main" component={Main} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes

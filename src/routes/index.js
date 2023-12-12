import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"
import Main from "../views/Main"
import Cinema from "../views/Cinema"
import AllCinemas from "../views/AllCinemas"
import Movie from "../views/Movie"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// eslint-disable-next-line require-jsdoc
function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Cinemas" component={AllCinemas} />
        </Tab.Navigator>
    )
}
/**
 * Nacigates between Views.
 *
 * @return {JSX.Element} The Routes component.
 */
function Routes() {
    const StackOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={StackOptions}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Cinema" component={Cinema} options={{headerShown: true}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

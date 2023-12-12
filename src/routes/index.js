import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"
import Cinema from "../views/Cinema"
import AllCinemas from "../views/AllCinemas"
import UpcomingList from "../views/UpcomingMovies"
import UpcomingDetail from "../views/UpcomingDetail"
import Movie from "../views/Movie"


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

// eslint-disable-next-line require-jsdoc
function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Cinemas" component={AllCinemas} />
            <Tab.Screen name="Upcoming Movies" component={UpcomingList} />
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
        headerShown: true,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={StackOptions}
            >
                <Stack.Screen
                    name="Home" component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Cinema"
                    component={Cinema}
                />
                <Stack.Screen
                    name="Movie"
                    component={Movie}
                />
                <Stack.Screen
                    name="Upcoming"
                    component={UpcomingDetail}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

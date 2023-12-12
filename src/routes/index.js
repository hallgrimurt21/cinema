/* eslint-disable require-jsdoc */
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"
import Cinema from "../views/Cinema"
import AllCinemas from "../views/AllCinemas"
import Movie from "../views/Movie"
import UpcomingMovies from "../components/UpcomingMovies"

const Tab = createBottomTabNavigator()
const CinemaStack = createStackNavigator()
const UpcomingStack = createStackNavigator()

function CinemaStackScreen() {
    return (
        <CinemaStack.Navigator>
            <CinemaStack.Screen name="Cinemas" component={AllCinemas} />
            <CinemaStack.Screen name="Cinema" component={Cinema} />
            <CinemaStack.Screen
                name="Movie"
                component={Movie}
                options={{headerShown: false}}
            />
        </CinemaStack.Navigator>
    )
}
function UpcomingStackScreen() {
    return (
        <UpcomingStack.Navigator>
            <UpcomingStack.Screen
                name="Upcoming Movies"
                component={UpcomingMovies}
            />
        </UpcomingStack.Navigator>
    )
}
function Routes() {
    const TabOptions = {
        headerShown: false,
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Cinemas"
                screenOptions={TabOptions}
            >
                <Tab.Screen name="CinemasTab" component={CinemaStackScreen} />
                <Tab.Screen
                    name="UpcomingMoviesTab"
                    component={UpcomingStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes

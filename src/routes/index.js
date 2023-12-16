/* eslint-disable require-jsdoc */
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack"

import AllCinemas from "../views/AllCinemas"
import AllMovies from "../views/AllMovies"
import Cinema from "../views/Cinema"
import Movie from "../views/Movie"
import Trailer from "../views/Trailer"
import Upcoming from "../views/Upcoming"
import CustomTabBar from "../components/CustomTabBar"

const Tab = createBottomTabNavigator()
const CinemaStack = createStackNavigator()
const MovieStack = createStackNavigator()

function CinemaStackScreen() {
    const CinemaStackOptions = {headerShown: false}
    return (
        <CinemaStack.Navigator screenOptions={CinemaStackOptions}>
            <CinemaStack.Screen name="Cinemas Screen" component={AllCinemas} />
            <CinemaStack.Screen
                name="Cinema Screen"
                component={Cinema}
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forVerticalIOS,
                }}
            />
            <CinemaStack.Screen name="Movie Screen" component={Movie} />
            <CinemaStack.Screen
                name="Trailer"
                component={Trailer}
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forModalPresentationIOS,
                }}
            />
        </CinemaStack.Navigator>
    )
}
function MovieStackScreen() {
    const MovieStackOptions = {headerShown: false}
    return (
        <MovieStack.Navigator screenOptions={MovieStackOptions}>
            <MovieStack.Screen name="Movies Screen" component={AllMovies} />
            <CinemaStack.Screen name="Movie Screen" component={Movie} />

            <MovieStack.Screen
                name="Upcoming Movie Screen"
                component={Upcoming}
            />
            <MovieStack.Screen
                name="Trailer"
                component={Trailer}
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forModalPresentationIOS,
                }}
            />
        </MovieStack.Navigator>
    )
}
function Routes() {
    const TabOptions = {headerShown: false}
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={TabOptions}
            >
                <Tab.Screen name="Cinemas" component={CinemaStackScreen} />
                <Tab.Screen name="Movies" component={MovieStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes

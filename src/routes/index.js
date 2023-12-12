/* eslint-disable require-jsdoc */
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"
import Cinema from "../views/Cinema"
import AllCinemas from "../views/AllCinemas"
import Movie from "../views/Movie"
import UpcomingMovies from "../components/UpcomingMovies"
import CustomTabBar from "../components/CustomTabBar"


const Tab = createBottomTabNavigator()
const CinemaStack = createStackNavigator()
const UpcomingStack = createStackNavigator()

function CinemaStackScreen() {
    return (
        <CinemaStack.Navigator>
            <CinemaStack.Screen name="Cinemas Page" component={AllCinemas} />
            <CinemaStack.Screen
                name="Cinema Page"
                component={Cinema}
            />
            <CinemaStack.Screen
                name="Movie Page"
                component={Movie}
            />
        </CinemaStack.Navigator>
    )
}
function UpcomingStackScreen() {
    return (
        <UpcomingStack.Navigator>
            <UpcomingStack.Screen name="Upcoming Movies Page" component={UpcomingMovies} />
        </UpcomingStack.Navigator>
    )
}
function Routes() {
    // const TabOptions = {
    //     tabBarActiveTintColor: "white",
    //     headerShown: false,
    //     tabBarInactiveTintColor: "grey",
    //     tabBarIcon: () => null,
    //     tabBarLabelStyle: {
    //         fontSize: 20,
    //         marginBottom: 25,
    //         textShadowColor: "black",
    //         textShadowOffset: {width: -1, height: -1},
    //         textShadowRadius: 0.1,
    //     },
    //     tabBarStyle: {
    //         flexDirection: "row",
    //         justifyContent: "space-between",
    //         backgroundColor: "black",
    //     },
    //     tabBarItemStyle: {
    //         height: 75,
    //         borderRightWidth: 1,
    //         borderColor: "red",
    //     },
    // }
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{headerShown: false}} // Add this line
            >
                <Tab.Screen name="Cinemas" component={CinemaStackScreen} />
                <Tab.Screen name="Upcoming Movies" component={UpcomingStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes

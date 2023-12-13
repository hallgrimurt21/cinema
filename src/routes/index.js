/* eslint-disable require-jsdoc */
import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createStackNavigator} from "@react-navigation/stack"
import Cinema from "../views/Cinema"
import AllCinemas from "../views/AllCinemas"
import Movie from "../views/Movie"
import UpcomingMovies from "../components/UpcomingMovies"
import UpcomingDetail from "../components/UpcomingDetail"
import CustomTabBar from "../components/CustomTabBar"

const Tab = createBottomTabNavigator()
const CinemaStack = createStackNavigator()
const UpcomingStack = createStackNavigator()

function CinemaStackScreen() {
    return (
        <CinemaStack.Navigator>
            <CinemaStack.Screen
                name="Cinemas Page"
                component={AllCinemas}
                options={{headerShown: false}}
            />
            <CinemaStack.Screen
                name="Cinema Page"
                component={Cinema}
                options={{headerShown: false}}
            />
            <CinemaStack.Screen
                name="Movie Page"
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
                name="Upcoming Movies Page"
                component={UpcomingMovies}
            />
            <UpcomingStack.Screen
                name="Upcoming Detail"
                component={UpcomingDetail}
            />
        </UpcomingStack.Navigator>
    )
}
function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={(props) => <CustomTabBar {...props} />}
                screenOptions={{headerShown: false}} // Add this line
            >
                <Tab.Screen name="Cinemas" component={CinemaStackScreen} />
                <Tab.Screen
                    name="Upcoming Movies"
                    component={UpcomingStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes

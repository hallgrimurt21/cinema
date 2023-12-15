import React from "react"
import {View, Text, TouchableOpacity} from "react-native"
import {toggleShowUpcoming} from "../../redux/features/toggle"
import {useSelector, useDispatch} from "react-redux"
import MainHeader from "../../components/MainHeader"
import styles from "./styles"
import CinemaMovies from "../../components/CinemaMovies"
import UpcomingMovies from "../../components/UpcomingMovies" // Import the UpcomingMovies component

const AllMovies = ({navigation}) => {
    const dispatch = useDispatch()
    const showUpcoming = useSelector((state) => state.toggle.showUpcoming)

    const toggleMovies = () => {
        dispatch(toggleShowUpcoming()) // Dispatch the action
    }
    return (
        <View style={styles.container}>
            <MainHeader />
            <TouchableOpacity onPress={toggleMovies} style={styles.toggleButton}>
                <Text style={{color: "white", marginTop: 35, fontSize: 15}}>
                    {showUpcoming ? "Show\nCinema" : "Show\nUpcoming"}
                </Text>
            </TouchableOpacity>
            {showUpcoming ? <UpcomingMovies /> : <CinemaMovies />}
        </View>
    )
}

export default AllMovies

import React, {useState} from "react"
import {View, Text, TouchableOpacity} from "react-native"
import MainHeader from "../../components/MainHeader"
import styles from "./styles"
import CinemaMovies from "../../components/CinemaMovies"
import UpcomingMovies from "../../components/UpcomingMovies" // Import the UpcomingMovies component

const AllMovies = ({navigation}) => {
    const [showUpcoming, setShowUpcoming] = useState(false) // Add a state variable

    const toggleMovies = () => {
        setShowUpcoming(!showUpcoming) // Toggle the state variable when the button is pressed
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

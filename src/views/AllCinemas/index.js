import React from "react"
import {View} from "react-native"
import CinemaList from "../../components/CinemaList"
import MainHeader from "../../components/MainHeader"
import styles from "./styles"

const AllCinemas = () => {
    return (
        <View style={styles.container}>
            <MainHeader />
            <CinemaList />
        </View>
    )
}

export default AllCinemas

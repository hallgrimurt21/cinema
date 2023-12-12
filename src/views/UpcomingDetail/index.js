import React from "react";
import {View} from "react-native";
import UpcomingMovies from "../../components/UpcomingMovies";
import UpcomingDetail from "../../components/UpcomingDetail";

const Upcoming = ({route}) => {
    const {id} = route.params
    return (
        <View>
            <UpcomingDetail id={id} />
            <UpcomingMovies id={id} />
        </View>
    )
}

export default Upcoming
import React from "react"
import {View} from "react-native"

import UpcomingDetail from "../../components/UpcomingDetail"

const Upcoming = ({route}) => {
    const {id} = route.params
    return (
        <View>
            <UpcomingDetail id={id} />
        </View>
    )
}

export default Upcoming

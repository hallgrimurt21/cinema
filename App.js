/* eslint-disable require-jsdoc */
import React from "react"
import "react-native-gesture-handler"
import {Provider} from "react-redux"
import {store} from "./src/store"
import Appcontainer from "./src/routes"

export default function App() {
    return (
        <Provider store={store}>
            <Appcontainer />
        </Provider>
    )
}

/* eslint-disable require-jsdoc */
import {ONE_DAY_IN_MS} from "../constants/constants.js"
import {Buffer} from "buffer"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {USERNAME, PASSWORD} from "@env"

const encodedCredentials = Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64")

export async function getAuthToken() {
    const savedToken = await AsyncStorage.getItem("token")
    const savedDate = await AsyncStorage.getItem("tokenDate")


    // If there's a saved token and it's less than 24 hours old, return it
    if (savedToken && savedDate && new Date() - new Date(savedDate) < ONE_DAY_IN_MS) {
        return Promise.resolve(savedToken)
    }

    // Otherwise, fetch a new token
    return fetch("https://api.kvikmyndir.is/authenticate", {
        method: "POST",
        headers: {
            "Authorization": `Basic ${encodedCredentials}`,
        },
    })
        .then((response) => {
            return response.json()
        })
        .then(async(data) => {
        // Save the token and the current date and time
            await AsyncStorage.setItem("token", data.token)
            await AsyncStorage.setItem("tokenDate", new Date().toISOString())
            return data.token
        })
        .catch((error) => {
            console.error(error)
            throw error
        })
}

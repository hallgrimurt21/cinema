/* eslint-disable max-len */
import React, {useEffect} from "react"
import {View, Text, Pressable, ScrollView} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import {useNavigation} from "@react-navigation/native"
import {SafeAreaView} from "react-native-safe-area-context"
import YoutubePlayer from "react-native-youtube-iframe"
import styles from "../../views/Movie/styles"
import {setMounted, setUnmounted} from "../../redux/features/isMountedSlice"
import UpcomingHeader from "../UpcomingHeader"
import ButtonRowUpcoming from "../ButtonRowUpcoming"
import {
    showPlot,
    showGenres,
    showRelease,
    hideAll,
}
    from "../../redux/features/visibilitySlice"


const UpcomingDetail = ({id}) => {
    const navigation = useNavigation()
    const upcomingMovies = useSelector((state) => state.upcomingMovies.movies)
    const isMounted = useSelector((state) => state.isMounted)
    const dispatch = useDispatch()
    const upcoming = upcomingMovies.find((movie) => movie._id === id)
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    )


    const handleNavigate = () => {
        return () => {
            dispatch(hideAll())
            navigation.goBack()
        }
    }

    const handleToggle = (section) => {
        if (visibleSection === section) {
            dispatch(hideAll())
        } else {
            switch (section) {
            case "plot":
                dispatch(showPlot())
                break
            case "genres":
                dispatch(showGenres())
                break
            case "release":
                dispatch(showRelease())
                break
            default:
                break
            }
        }
    }

    useEffect(() => {
        dispatch(setMounted())

        return () => {
            dispatch(setUnmounted())
        }
    }, [dispatch])

    if (!upcoming) {
        return <Text>Loading...</Text>
    }


    return (
        <View style={styles.extraView}>
            <ScrollView style={{...styles.container, flex: 1}}>
                <UpcomingHeader upcoming={upcoming} handleNavigate={handleNavigate}/>
                <ButtonRowUpcoming
                    handleToggle={handleToggle}
                    visibleSection={visibleSection}
                    upcoming={upcoming}
                    release={upcoming.release}
                />

                <View>
                    <Pressable onPress={navigation.goBack}>
                        <Text>Back</Text>
                    </Pressable>
                    {isMounted &&
                upcoming.trailers &&
                upcoming.trailers[0] &&
                upcoming.trailers[0].results &&
                upcoming.trailers[0].results[0] &&
                upcoming.trailers[0].results[0].key ? (
                            <Pressable
                                style={({pressed}) => [
                                    {opacity: pressed ? 0.5 : 1},
                                    styles.trailerButton,
                                ]}
                                onPress={() =>
                                    navigation.navigate("Trailer", {
                                        trailerID: upcoming.trailers[0].results[0].key,
                                    })
                                }
                            >
                                <Text style={styles.time}>Watch Trailer</Text>
                            </Pressable>
                        ) : (
                            <View style={styles.trailerButton}>
                                <Text style={styles.time}>No Trailer available</Text>
                            </View>
                        )}
                </View>
            </ScrollView>
        </View>
    )
}

export default UpcomingDetail

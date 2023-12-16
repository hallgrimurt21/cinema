import {useDispatch, useSelector} from "react-redux"
import {
    hideAll,
    showGenres,
    showPlot,
    showShowtimes,
    showRelease,
} from "../redux/features/visibilitySlice"
import {LayoutAnimation} from "react-native"
import customAnimation from "../styles/customAnimation"

const useHandleToggle = () => {
    const dispatch = useDispatch()
    const visibleSection = useSelector(
        (state) => state.visibility.visibleSection,
    ) // get the visibleSection from the redux store

    return (section) => {
        // handle the toggling of the visibleSection
        LayoutAnimation.configureNext(customAnimation)

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
                case "showtimes":
                    dispatch(showShowtimes())
                    break
                case "release":
                    dispatch(showRelease())
                    break
                default:
                    break
            }
        }
    }
}

export default useHandleToggle

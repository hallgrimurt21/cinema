import React, {useRef, useState} from "react"
import {
    Pressable,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native"
import Checkbox from "expo-checkbox"
import ModalDropdown from "react-native-modal-dropdown"
import Icon from "react-native-vector-icons/FontAwesome"
import {useDispatch} from "react-redux"

import {toggleOption} from "../../redux/features/dropDownSlice"
import {strongGrey} from "../../styles/colors"
import {styles} from "./styles"

const dropDown = ({selectedOptions}) => { // renders the drop down menu
    const dispatch = useDispatch()
    const dropdownRef = useRef(null)
    const [checkedOptions, setCheckedOptions] = useState([])

    const handleToggleOption = (option) => {
        dispatch(toggleOption(option))
        setCheckedOptions((prevState) => {
            if (prevState.includes(option)) {
                return prevState.filter((item) => item !== option)
            } else {
                return [...prevState, option]
            }
        })
    } // handles toggling the options

    const renderRow = (option) => (
        <TouchableWithoutFeedback style={styles.overContainer}>
            <View style={styles.container}>
                <Pressable onPress={() => handleToggleOption(option)}>
                    <Checkbox
                        style={styles.checkbox}
                        value={checkedOptions.includes(option)}
                        onValueChange={() => handleToggleOption(option)}
                        tintColor="white" // color of the border when the checkbox is unchecked
                        onCheckColor="black" // color of the check mark
                        onFillColor="brown"
                        size={20}
                    />
                </Pressable>
                <Pressable
                    style={styles.textButton}
                    onPress={() => handleToggleOption(option)}
                >
                    <Text style={styles.text}>{option}</Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    ) // renders the options for the drop down menu
    return (
        <View>
            <TouchableOpacity
                onPress={(event) => {
                    dropdownRef.current.show()
                }}
            >
                <Icon name="filter" size={20} color="#fff" />
            </TouchableOpacity>
            <ModalDropdown
                defaultIndex={0}
                ref={dropdownRef}
                options={selectedOptions}
                renderRow={renderRow}
                renderSeparator={(sectionId, rowId) => (
                    <TouchableWithoutFeedback>
                        <View
                            key={rowId}
                            style={{backgroundColor: strongGrey, height: 1}}
                        />
                    </TouchableWithoutFeedback>
                )}
                defaultValue=""
                adjustFrame={(style) => {
                    return {...style}
                }}
                dropdownStyle={styles.dropdownStyle}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default dropDown

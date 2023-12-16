import React, {useRef, useState} from "react"
import {useDispatch} from "react-redux"
import ModalDropdown from "react-native-modal-dropdown"
import Checkbox from "expo-checkbox"
import {toggleOption} from "../../redux/features/dropDownSlice"
import Icon from "react-native-vector-icons/FontAwesome"
import {TouchableOpacity, View, Text, Pressable} from "react-native"
import {TouchableWithoutFeedback} from "react-native"
import {styles} from "./styles"
import {strongGrey} from "../../styles/colors"

const dropDown = ({selectedOptions}) => {
    const dispatch = useDispatch()
    const dropdownRef = useRef(null) // Add this line
    const [checkedOptions, setCheckedOptions] = useState([]) // Add this line

    const handleToggleOption = (option) => {
        dispatch(toggleOption(option))
        setCheckedOptions((prevState) => {
            if (prevState.includes(option)) {
                return prevState.filter((item) => item !== option)
            } else {
                return [...prevState, option]
            }
        })
    }

    const renderRow = (option) => (
        <TouchableWithoutFeedback style={styles.overContainer}>
            <View style={styles.container}>
                <Pressable onPress={() => handleToggleOption(option)}>
                    <Checkbox
                        style={styles.checkbox}
                        value={checkedOptions.includes(option)}
                        onValueChange={() => handleToggleOption(option)} // Add this line
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
    )
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
                dropdownStyle={styles.dropdownStyle} // Modify this line
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default dropDown

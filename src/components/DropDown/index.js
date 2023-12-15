import React, {useRef} from "react"
import {useDispatch} from "react-redux"
import ModalDropdown from "react-native-modal-dropdown"
import {CheckBox} from "react-native-elements"
import {toggleOption} from "../../redux/features/dropDownSlice"
import Icon from "react-native-vector-icons/FontAwesome"
import {TouchableOpacity} from "react-native"

const dropDown = ({selectedOptions}) => {
    const dispatch = useDispatch()
    const dropdownRef = useRef(null) // Add this line

    const renderRow = (option) => (
        <CheckBox
            title={option}
            checked={selectedOptions.includes(option)}
            onPress={() => dispatch(toggleOption(option))}
        />
    )

    return (
        <TouchableOpacity
            onPress={(event) => {
                dropdownRef.current.show()
            }}
        >
            <Icon name="filter" size={20} color="#fff" />
            <ModalDropdown
                ref={dropdownRef}
                options={selectedOptions}
                renderRow={renderRow}
                defaultValue=""
                adjustFrame={(style) => {
                    return {...style}
                }}
                dropdownStyle={{zIndex: 2, width: "50%", textAlign: "right"}}
                showsVerticalScrollIndicator={false}
            />
        </TouchableOpacity>
    )
}

export default dropDown

import React from "react"
import {useDispatch} from "react-redux"
import ModalDropdown from "react-native-modal-dropdown"
import {CheckBox} from "react-native-elements"
import {toggleOption} from "../../redux/features/dropDownSlice"

const dropDown = ({selectedOptions}, {defaultValue}) => {
    const dispatch = useDispatch()

    const renderRow = (option) => (
        <CheckBox
            title={option}
            checked={selectedOptions.includes(option)}
            onPress={() => dispatch(toggleOption(option))}
        />
    )

    return (
        // ...
        <ModalDropdown
            options={selectedOptions}
            renderRow={renderRow}
            defaultValue={defaultValue}
            textStyle={{color: "white", fontSize: 15}}
            dropdownStyle={{zIndex: 2, width: "50%"}}
        />
        // ...
    )
}

export default dropDown

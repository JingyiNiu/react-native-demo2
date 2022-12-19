import React from "react";
import { TextInput, StyleSheet } from "react-native";
import color from "../variables/color";

const Input = (props) => {
    return (
        <>
            <TextInput {...props} style={{ ...styles.input, ...props.style }} />
        </>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderBottomColor: color.primaryText,
        borderBottomWidth: 1,
        color: color.primaryText,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
});

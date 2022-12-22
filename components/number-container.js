import React from "react";
import { StyleSheet, Text, View } from "react-native";
import color from "../variables/color";

const NumberContainer = ({ number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: color.secondaryColor,
        padding: 10,
        marginVertical: 16,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    number: {
        color: color.secondaryColor,
        fontSize:24,
        fontWeight:"800"
    },
});

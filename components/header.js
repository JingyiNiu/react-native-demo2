import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../variables/color";

const Header = (props) => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 90,
        paddingTop: 32,
        paddingHorizontal: 16,
        backgroundColor: color.primaryBgc,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        color: "#181D31",
        fontSize: 18,
    },
});

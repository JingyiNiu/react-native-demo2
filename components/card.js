import { View, StyleSheet, Text } from "react-native";
import color from "../variables/color";

const Card = (props) => {
    return (
        <>
            <View style={{ ...styles.cardContainer, ...props.style }}>{props.children}</View>
        </>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});

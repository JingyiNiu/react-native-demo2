import { View, Text, StyleSheet, Pressable } from "react-native";
import color from "../variables/color";

const PrimaryButton = ({ children, style }) => {
    function pressHandler() {
        console.log("Pressed!");
    }

    return (
        <>
            <View style={styles.buttonOuterContainer}>
                <Pressable
                    style={({ pressed }) =>
                        pressed
                            ? { ...styles.buttonInnerContainer, ...styles.pressed, ...style }
                            : { ...styles.buttonInnerContainer, ...style }
                    }
                    onPress={pressHandler}
                    android_ripple={{ color: "#640233" }}
                >
                    <Text style={styles.buttonText}>{children}</Text>
                </Pressable>
            </View>
        </>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttonInnerContainer: {
        backgroundColor: color.secondaryColor,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
});

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import color from "../variables/color";
import PrimaryButton from "../components/primary-button";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
    return (
        <>
            <View style={styles.rootContainer}>
                <Text>YOU GOT IT!</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../assets/images/success.png")} />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                    guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton style={styles.button} onPress={onStartNewGame}>
                    Start New Game
                </PrimaryButton>
            </View>
        </>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: color.primaryColor,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        color: color.primaryColor,
    },
    button: {
        backgroundColor: color.primaryColor,
    },
});

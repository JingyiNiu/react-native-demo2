import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import NumberContainer from "../components/number-container";
import PrimaryButton from "../components/primary-button";
import color from "../variables/color";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
};

const GameScreen = ({ userNumber }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <>
            <View style={styles.screen}>
                <Text>Opponent's Guess</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <PrimaryButton style={styles.lowerBtn}>Lower</PrimaryButton>
                    <PrimaryButton style={styles.higherBtn}>Higher</PrimaryButton>
                </View>
                <View style={styles.logContainer}>
                    <Text>LOG ROUNDS</Text>
                </View>
            </View>
        </>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 16,
        width: 300,
        maxWidth: "80%",
    },
    higherBtn: {
        backgroundColor: color.primaryColor,
    },
    lowerBtn: {
        backgroundColor: color.secondaryColor,
    },
    logContainer: {
        marginTop: 16,
    },
});

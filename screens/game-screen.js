import { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

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

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "higher" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }

        const newRandomNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(newRandomNumber);
        setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
    };

    return (
        <>
            <View style={styles.screen}>
                <Text>Opponent's Guess</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        style={styles.lowerBtn}
                        onPress={() => nextGuessHandler("lower")}
                    >
                        Lower
                    </PrimaryButton>
                    <PrimaryButton
                        style={styles.higherBtn}
                        onPress={() => nextGuessHandler("higher")}
                    >
                        Higher
                    </PrimaryButton>
                </View>
                {/* <View style={styles.logContainer}>
                    <Text>LOG ROUNDS</Text>
                </View> */}
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

import { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import PrimaryButton from "../components/primary-button";
import Header from "../components/header";
import Card from "../components/card";
import Input from "../components/input";
import color from "../variables/color";

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState("");

    const handleInput = (inputText) => {
        console.log(inputText);
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };
    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View style={styles.screen}>
                    <Header title="Guess a Number" />
                    <Card style={styles.inputContainer}>
                        <Text>Set a number</Text>
                        <Input
                            style={styles.numberInput}
                            blurOnSubmit
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleInput}
                            value={enteredValue}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton style={styles.resetButton}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton style={styles.confirmButton}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    inputContainer: {
        width: 300,
        marginTop: 60,
        maxWidth: "80%",
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    resetButton: {
        backgroundColor: color.secondaryColor,
    },
    confirmButton: {
        backgroundColor: color.primaryColor,
    },
});

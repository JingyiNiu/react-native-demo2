import { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import PrimaryButton from "../components/primary-button";
import Card from "../components/card";
import Input from "../components/input";
import color from "../variables/color";
import NumberContainer from "../components/number-container";

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const handleInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    };

    const handleReset = () => {
        setEnteredValue("");
        setConfirmed(false);
    };

    const handleConfirm = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid Number", "Number has to be a number between 1 and 99", [
                { text: "OKay", style: "destructive", onPress: handleReset },
            ]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <View style={styles.outputContainer}>
                <Text>Chosen number: </Text>
                <NumberContainer number={selectedNumber} />
                <PrimaryButton
                    style={styles.confirmButton}
                    onPress={() => onPickNumber(selectedNumber)}
                >
                    Start Game
                </PrimaryButton>
            </View>
        );
    }

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View style={styles.screen}>
                    <Card style={styles.inputContainer}>
                        <Text>Set a number (1~99)</Text>
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
                                <PrimaryButton style={styles.resetButton} onPress={handleReset}>
                                    Reset
                                </PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton style={styles.confirmButton} onPress={handleConfirm}>
                                    Confirm
                                </PrimaryButton>
                            </View>
                        </View>
                    </Card>
                    {confirmed && confirmedOutput}
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
    outputContainer: {
        alignItems: "center",
    },
    inputContainer: {
        width: 300,
        marginTop: 40,
        marginBottom: 20,
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

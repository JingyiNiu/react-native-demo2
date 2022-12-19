import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/primary-button";
import Header from "../components/header";
import Card from "../components/card";
import color from "../variables/color";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Header title="Guess a Number" />
            <Card style={styles.inputContainer}>
                <Text>Set a number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
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
        borderBottomColor: color.primaryTextColor,
        borderBottomWidth: 1,
        color: color.primaryTextColor,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    resetButton: {
        backgroundColor: color.secondaryBgc,
    },
    confirmButton: {
        backgroundColor: color.primaryBgc,
    },
});

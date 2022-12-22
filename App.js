import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Header from "./components/header";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";

export default function App() {
    const [userNumber, setUserNumber] = useState();

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber}/>;
    }

    return (
        <>
            <Header title="Guess a Number" />
            {screen}
        </>
    );
}

const styles = StyleSheet.create({});

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Header from "./components/header";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";
import GameOverScreen from "./screens/game-over-screen";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(false);
    const [guessRounds, setGuessRounds] = useState(0);

    const pickedNumberHandler = (pickedNumber) => {
        setUserNumber(pickedNumber);
    };

    const gameOverHandler = (numberOfRounds) => {
        setGameIsOver(true);
    };

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />;
    }

    return (
        <>
            <Header title="Guess a Number" />
            {screen}
        </>
    );
}

const styles = StyleSheet.create({});

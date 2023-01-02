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
        setGameIsOver(false);
    };

    const gameOverHandler = (numberOfRounds) => {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    };

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = (
            <GameOverScreen
                userNumber={userNumber}
                roundsNumber={guessRounds}
                onStartNewGame={startNewGameHandler}
            />
        );
    }

    return (
        <>
            <Header title="Guess a Number" />
            {screen}
        </>
    );
}

const styles = StyleSheet.create({});

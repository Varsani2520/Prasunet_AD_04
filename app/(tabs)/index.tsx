import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Animated } from 'react-native';

const TicTacToe = () => {
  const initialBoard = Array(9).fill({ value: null, highlight: false });
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1)); // Animation value

  const handlePress = (index) => {
    if (board[index].value || winner) return;

    const newBoard = board.slice();
    newBoard[index] = { value: isXNext ? 'X' : 'O', highlight: false };
    setBoard(newBoard);
    setIsXNext(!isXNext);
    calculateWinner(newBoard);

    // Trigger animation
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0.3, duration: 200, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true })
    ]).start();
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a].value && board[a].value === board[b].value && board[a].value === board[c].value) {
        setWinner(board[a].value === 'X' ? 'Player 1' : 'Player 2');
        highlightWinnerLine(line); // Highlight winning line
        return;
      }
    }

    if (!board.some(square => square.value === null)) {
      setWinner('Draw');
    }
  };

  const highlightWinnerLine = (line) => {
    // Modify the board state to highlight the winning line
    const highlightedBoard = board.map((square, index) => ({
      ...square,
      highlight: line.includes(index),
    }));
    setBoard(highlightedBoard);
  };

  const renderSquare = (index) => {
    const { value, highlight } = board[index];
    let textColor = highlight ? 'white' : (value === 'O' ? 'yellow' : 'white');
    let backgroundColor = highlight ? 'yellow' : 'transparent';

    return (
      <TouchableOpacity key={index} style={[styles.square, { backgroundColor }]} onPress={() => handlePress(index)}>
        <Animated.Text style={[styles.squareText, { opacity: fadeAnim, color: textColor }]}>
          {value}
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tic Tac Toe</Text>
      </View>
      <View style={[styles.board, { backgroundColor: 'red', borderRadius: 15 }]}>
        {board.map((_, index) => renderSquare(index))}
      </View>
      {winner !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
          </Text>
          <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
            <Text style={styles.resetButtonText}>Reset Game</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  board: {
    width: 304, 
    height: 304, 
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 2,
    borderColor: '#fff',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  squareText: {
    fontSize: 32,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
  },
  resetButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default TicTacToe;

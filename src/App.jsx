import { useEffect, useState } from "react";
import styled from "styled-components";
import Cells from "./components/cells";
import Modal from "./components/modal";
import { GlobalStyles } from "./styles/globalStyles";
import words from "./words.json"

const VariantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 180px;
`;

const App = () => {
  const [solution] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [isNoWordModalActive, setIsNoWordModalActive] = useState(false);
  const [isLoseModalActive, setIsLoseModalActive] = useState(false);
  const [isWinModalActive, setIsWinModalActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isGameOver) return;

      if (e.key === "Backspace") {
        setCurrentGuess(prev => prev.slice(0, -1));
        return;
      }

      if (e.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }

        if (currentGuess === solution) {
          setIsGameOver(true);
          setIsWinModalActive(true);
        }

        if (!words.find((item) => item === currentGuess)) {
          setIsNoWordModalActive(true);
          setTimeout(() => {
            setIsNoWordModalActive(false);
          }, 1000);
          return;
        };

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');
      }

      if (currentGuess.length >= 5) {
        return;
      }

      const isLetter = (e.key >= 'a' && e.key <= 'z');
      if (!isLetter) {
        return;
      }

      setCurrentGuess(prev => prev + e.key);
    };

    const isNullGuesses = guesses.findIndex((item) => item === null);
    if (isNullGuesses < 0) {
      setIsLoseModalActive(true);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, guesses, isGameOver, solution]);
  return (
    <>
      <GlobalStyles />
      <VariantsWrapper>
        {
          guesses.map((item, index) => {
            const isCurrentGuess = index === guesses.findIndex(val => val == null);
            return (
              <Cells
                key={index}
                guess={isCurrentGuess ? currentGuess : item ?? ""}
                solution={solution}
                isFinal={!isCurrentGuess && item != null}
              />
            )
          })
        }
      </VariantsWrapper>
      <Modal isActive={isNoWordModalActive}>
        Word not found
      </Modal>
      <Modal isActive={isLoseModalActive}>
        <div>
          <h3>
            You Lost!
          </h3>
          <p>
            The word was <b>{solution}</b>
          </p>
        </div>
      </Modal>
      <Modal isActive={isWinModalActive}>
        You Win!
      </Modal>
    </>
  );
}

export default App;

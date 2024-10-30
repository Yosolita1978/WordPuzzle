import { useState, useEffect } from "react";


export default function Word({ userWord }) {

    const [shuffledWord, setShuffledWord] = useState([]);

    // Helper function to shuffle letters from a string an return them in an array
    function shuffleWord(string) {
        let letters = string.split("");
        for (let i = letters.length - 1; i > 0; i--) {
            let rIndex = Math.floor(Math.random() * (i * 1));
            [letters[i], letters[rIndex]] = [letters[rIndex], letters[i]]
        }
        return letters;
    }

    useEffect(() => {
        // Shuffle the letters of the userWord each time it changes
        setShuffledWord(shuffleWord(userWord));
    }, [userWord]);


    return (
        <div className="scrabble-container">
            {shuffledWord.map((letter, index) => (
                <span key={index} className="scrabble-tile">
                    {letter.toUpperCase()}
                </span>
            ))}
        </div>
    )
}

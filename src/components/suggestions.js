"use client";

import { partialAnagram } from "@/logic/logic";
import { useMemo, useState } from "react";
import words from "@/logic/common_words";

const HORIZONTAL = "h";
const VERTICAL = "v"; 

export default function Suggestions({userWord}) {

    const [directions, setDirections] = useState({});

    const suggestions = useMemo(() => words.filter(
        (word) => partialAnagram(userWord, word) &&  word.length >= 3
    ), [userWord]);

    const toggleDirection = (s) => {

        setDirections((directions) => {
        let newDirection;
        if(!directions[s] || directions[s] === HORIZONTAL){
            newDirection = VERTICAL 
        } else{
            newDirection = HORIZONTAL
        }
        return {...directions, [s]: newDirection}
    })


    }

    return (
        <ul>
            {suggestions.map((s) => (
                <li key={s}>{s} <span onClick={() => toggleDirection(s)}>{directions[s] === VERTICAL ? "⬇️" : "➡️" }</span></li>
            ))}
        </ul>
    )
}

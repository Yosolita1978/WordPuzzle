"use client";

import { partialAnagram } from "@/logic/logic";
import { useState, useMemo } from "react";
import words from "@/logic/common_words";

export default function Suggestions({ userWord }) {

    const suggestions = useMemo(() => words.filter(
        (word) => partialAnagram(userWord, word) && word.length >= 3
    ), [userWord]);


    return (
        <>
            {/* Show suggestion placeholders for guessing */}
            <ul>
                {suggestions.map((s) => (
                    <li key={s} className="suggestion-placeholder">
                        {Array(s.length).fill("_").map((_, idx) => (
                            <span key={idx} className="suggestion-tile">_</span>
                        ))}
                    </li>
                ))}
            </ul>

        </>
    )
}

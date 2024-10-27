"use client";

import { useState } from "react";
import words from "@/logic/common_words";
import Suggestions from "./suggestions";


export default function Form() {

    const [input, setInput] = useState("");
    const [ userWord, setUserWord] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!input) return;
        //send here to suggestions
        setUserWord(input)
        setInput("")
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='mt-8 max-w-sm p-6 block'>
            <label className='block mb-2'>
                <span className='text-white block'>Word:</span>
                <input
                    className="w-full text-black"
                    type="text"
                    placeholder="Please enter a word"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </label>
            <button className='w-full h-10 rounded-md bg-[#d8761a] px-8 shadow transition-colors hover:bg-blue-800"' type="submit">Submit</button>

        </form>
        <Suggestions userWord={userWord}/>
        </>
    )
}
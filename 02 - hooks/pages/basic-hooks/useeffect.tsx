import React, { useEffect, useState } from "react";
import { Input } from "@/components/Input";
import { hoc } from "@/components/Template";

const Template = hoc(Input);

export default function UseEffect() {
    const [text, setText] = useState("");
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        if (text != "") {
            setTyping(true);

            const timeoutId = setTimeout(() => {
                setTyping(false);
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [text]);

    return (
        <>
            <p>{text}</p>
            {typing && <small>User is typing...</small>}
            <Template
                type='text'
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                title='useEffect'
                topics='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React."
                }
            />
        </>
    );
}

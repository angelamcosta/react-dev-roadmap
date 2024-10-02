import { hoc } from "@/components/Template";
import { Input } from "@/components/Input";
import React, { useState } from "react";

const Template = hoc(Input);

export default function UseState() {
    const [text, setText] = useState<string>("");

    return (
        <>
            <p>{text}</p>
            <Template
                type='text'
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                title='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React."
                }
                topics='useState'
            />
        </>
    );
}

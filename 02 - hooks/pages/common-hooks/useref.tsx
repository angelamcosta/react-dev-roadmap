import React, { useRef } from "react";
import { hoc } from "@/components/Template";
import { Button } from "@/components/Button";

const Template = hoc(Button);

export default function UseRef() {
    const ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert(`The current value of ref is ${ref.current}`);
    }

    return (
        <>
            <Template
                name='add 1 to the ref value'
                type='button'
                onClick={handleClick}
                title='useRef'
                topics='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React."
                }
            />
            <small>
                React <b>useRef</b> Hook does not cause re-renders.<br/>If we tried
                to count how many times our application renders using the{" "}
                <b>useState</b> Hook, we would be caught in an infinite loop since this Hook
                itself causes a re-render.<br/>To avoid this, we can use the{" "}
                <b>useRef</b> Hook.
            </small>
        </>
    );
}

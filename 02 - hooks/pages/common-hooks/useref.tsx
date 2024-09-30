import { hoc } from "@/components/Template";
import { useRef } from "react";
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
        </>
    );
}

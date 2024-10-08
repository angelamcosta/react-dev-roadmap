import React from "react";
import { Todo } from "@/components/TodoListCallback";
import { hoc } from "@/components/Template";

const Template = hoc(Todo);

export default function UseCallback() {
    return (
        <>
            <Template
                title='useCallback'
                topics='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React."
                }
            />
            <small>
                The <b>useMemo</b> and <b>useCallback</b> Hooks are similar.<br/>The
                main difference is that <b>useMemo</b> returns a memoized value
                and <b>useCallback</b> returns a memorized function.
            </small>
        </>
    );
}

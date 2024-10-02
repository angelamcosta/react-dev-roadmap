import React from "react";
import { hoc } from "@/components/Template";
import { Todo } from "@/components/TodoListMemo";

const Template = hoc(Todo);

export default function UseMemo() {
    return (
        <>
            <Template
                title='useMemo'
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

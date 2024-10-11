import { useState, useCallback, useMemo, useReducer, useEffect } from "react";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { hoc } from "@/components/Template";

const Template = hoc(Model);

interface TodoProps {
    id: number;
    task: string;
    done: boolean;
}

type ActionType =
    | { type: "ADD"; payload: string }
    | { type: "TOGGLE"; payload: number }
    | { type: "REMOVE"; payload: number };

const todoReducer = (state: TodoProps[], action: ActionType): TodoProps[] => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                { id: state.length, task: action.payload, done: false },
            ];
        case "TOGGLE":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        case "REMOVE":
            return state.filter((_, index) => index != action.payload);
        default:
            return state;
    }
};

function Model() {
    const [list, dispatch] = useReducer(todoReducer, []);
    const [input, setInput] = useState<string>("");
    const [flag, setFlag] = useState<boolean>(false);

    const toggleCheckbox = useCallback((index: number) => {
        dispatch({ type: "TOGGLE", payload: index });
    }, []);

    const removeItem = useCallback(
        (index: number) => {
            dispatch({ type: "REMOVE", payload: index });
        },
        [list]
    );

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (input != "") {
                dispatch({ type: "ADD", payload: input });
                setInput("");
            }
        },
        [input]
    );

    const completedItems = useMemo(() => {
        return list.filter((item) => item.done == true).length;
    }, [list]);

    useEffect(() => {
        if (input != "") {
            setFlag(true);

            const timeoutId = setTimeout(() => {
                setFlag(false);
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [input]);

    return (
        <>
            <h3>List items: {list.length}</h3>
            <h3>Completed items: {completedItems}</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.task}{" "}
                        <Input
                            type='checkbox'
                            checked={item.done}
                            onChange={() => toggleCheckbox(index)}
                        />{" "}
                        <Button
                            name='x'
                            type='button'
                            onClick={() => removeItem(index)}
                        />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.currentTarget.value)}
                />{" "}
                <Button type='submit' name='+' />
                <br />
                {flag && <small>user is typing...</small>}
            </form>
        </>
    );
}

export default function Index() {
    return (
        <>
            <Template
                title='project'
                topics='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React. Here i'll try to use most or all the hooks i've learned so far to test my current knowledge and keep lerning about this topic."
                }
            />
        </>
    );
}

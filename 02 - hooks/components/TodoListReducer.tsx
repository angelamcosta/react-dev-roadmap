import { useState, useCallback, useReducer, useMemo } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface TodoProps {
    id: number;
    task: string;
    checked: boolean;
}

type ActionType =
    | { type: "ADD_TODO"; payload: string }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "REMOVE_TODO"; payload: number };

const todoReducer = (state: TodoProps[], action: ActionType): TodoProps[] => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: state.length, task: action.payload, checked: false },
            ];
        case "TOGGLE_TODO":
            return state.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, checked: !todo.checked }
                    : todo
            );
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state;
    }
};

export function Todo() {
    const [list, dispatch] = useReducer(todoReducer, []);
    const [item, setItem] = useState<string>("");

    const toggleChecked = useCallback((index: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: index });
    }, []);

    const removeItem = useCallback((index: number) => {
        dispatch({ type: "REMOVE_TODO", payload: index });
    }, [list]);

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (item !== "") {
                dispatch({ type: "ADD_TODO", payload: item });
                setItem("");
            }
        },
        [item]
    );

    const completeCount = useMemo(() => {
        return list.filter((todo) => todo.checked).length;
    }, [list]);

    return (
        <>
            <h3>Total Todos: {list.length}</h3>
            <h3>Completed Todos: {completeCount}</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.task}
                        <Input
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => toggleChecked(index)}
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
                    value={item}
                    onChange={(e) => setItem(e.currentTarget.value)}
                />{" "}
                <Button name='+' type='submit' />
            </form>
        </>
    );
}

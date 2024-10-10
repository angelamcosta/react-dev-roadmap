import React, { useCallback, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface TodoProps {
    id: number;
    task: string;
    checked: boolean;
}

export function Todo() {
    const [list, setList] = useState<TodoProps[]>([]);
    const [item, setItem] = useState<string>("");

    const toggleCheckbox = useCallback(
        (index: number) => {
            const newList = [...list];
            newList[index].checked = !list[index].checked;
            setList(newList);
        },
        [list]
    );

    const removeItem = useCallback((index: number) => {
        setList(list.filter((_, i) => i !== index));
    }, [list]);

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (item != "") {
                setList([
                    ...list,
                    { id: list.length, task: item, checked: false },
                ]);
                setItem("");
            }
        },
        [item]
    );

    return (
        <>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.task}{" "}
                        <Input
                            type='checkbox'
                            checked={item.checked}
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
                    value={item}
                    onChange={(e) => setItem(e.currentTarget.value)}
                />{" "}
                <Button name='+' type='submit' />
            </form>
        </>
    );
}

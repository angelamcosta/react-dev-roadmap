import { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface Task {
    id: number;
    name: string;
    check: boolean;
}

export function TodoList() {
    const [list, setList] = useState<Task[]>([]);
    const [item, setItem] = useState<string>("");

    function toggleChecked(i: number) {
        const newList = [...list];
        newList[i].check = !list[i].check;
        setList(newList);
    }

    function removeItem(i: number) {
        setList(list.filter((_, index) => index !== i));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (item != "") {
            setList([...list, { id: list.length, name: item, check: false }]);
            setItem("");
        }
    }

    return (
        <>
            <h1>TodoList</h1>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.name}{" "}
                        <Input
                            type='checkbox'
                            checked={item.check}
                            onClick={() => toggleChecked(index)}
                        />{" "}
                        <Button
                            type='button'
                            onClick={() => removeItem(index)}
                            value='x'
                        />
                    </li>
                ))}
            </ul>
            {list.length == 0 && <p>The list is empty for now</p>}
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    onChange={(e) => setItem(e.currentTarget.value)}
                    value={item}
                    placeholder='new item'
                />{" "}
                <Button type='submit' value='+' />
            </form>
        </>
    );
}

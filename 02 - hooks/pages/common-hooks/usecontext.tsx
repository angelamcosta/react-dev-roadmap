import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import React, { useState, createContext, useContext } from "react";
import { hoc } from '@/components/Template';

const Template = hoc(Component1);

const UserContext = createContext("");

function Component1() {
    const [user, setUser] = useState("");
    const [item, setItem] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (item !== "") {
            setUser(item);
            setItem("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    value={item}
                    onChange={(e) => setItem(e.currentTarget.value)}
                /> {" "}
                <Button type='submit' name='add name' />
            </form>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2 />
            </UserContext.Provider>
        </>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

export default function UseContext() {
    return (
        <>
            <Template
                title='useContext'
                topics='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React."
                }
            />
            <p>Reference for this example of useContext from <a href='https://www.w3schools.com/react/react_usecontext.asp'>W3Schools</a>.</p>
        </>
    );
}
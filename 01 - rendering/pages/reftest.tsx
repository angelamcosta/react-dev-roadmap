import { Button } from "@/components/Button";
import Link from "next/link";
import { useRef } from "react";

export default function RefTest() {
    let ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert(`You clicked this button ${ref.current} times`);
    }

    return (
        <>
            <div>
                <h1>Test</h1>
                <small>Referencing Values with Refs</small>
                <br />
                <br />
                <Button
                    type='button'
                    value='add 1 to the current value'
                    onClick={handleClick}
                />
                <br />
                <br />
                <Link href={"/"}>Go back</Link>
            </div>
        </>
    );
}

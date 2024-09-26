import { TodoList } from "@/components/TodoList";
import Link from "next/link";

export default function Todo() {
    return (
        <>
            <TodoList />
            <br />
            <Link href={"/"}>Go back</Link>
        </>
    );
}

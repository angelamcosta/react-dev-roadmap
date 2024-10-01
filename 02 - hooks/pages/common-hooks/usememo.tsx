import { hoc } from "@/components/Template";
import { Todo } from "@/components/TodoListMemo";

const Template = hoc(Todo);

export default function UseMemo() {
    return (
        <Template
            title='useMemo'
            topics='Built-in React Hooks'
            subtitle={
                "These are exercises for the Hooks section of roadmap.sh for learning React."
            }
        />
    );
}

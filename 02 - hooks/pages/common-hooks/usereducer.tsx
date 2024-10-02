import { Todo } from "@/components/TodoListReducer";
import { hoc } from "@/components/Template";

const Template = hoc(Todo);

export default function UseReducer() {
    return (
        <Template
            title='useReducer'
            topics='Built-in React Hooks'
            subtitle={
                "These are exercises for the Hooks section of roadmap.sh for learning React."
            }
        />
    );
}

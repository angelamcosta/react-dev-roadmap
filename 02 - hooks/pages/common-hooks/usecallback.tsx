<<<<<<< Updated upstream
import { Todo } from "@/components/TodoList";
=======
import { Todo } from "@/components/TodoListCallback";
>>>>>>> Stashed changes
import { hoc } from "@/components/Template";

const Template = hoc(Todo);

export default function UseCallback() {
    return (
        <>
            <Template
                title='useCallback'
                topics='Built-in React Hooks'
                subtitle={
                    "These are exercises for the Hooks section of roadmap.sh for learning React."
                }
            />
        </>
    );
}

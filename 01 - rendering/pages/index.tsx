import { ListItem } from "@/components/ListItem";

export default function Index() {
    return (
        <>
            <h1>Rendering</h1>
            <small>
<<<<<<< Updated upstream
                This are exercises for the <b>Rendering</b> section of
=======
                These are exercises for the <b>Rendering</b> section of
>>>>>>> Stashed changes
                roadmap.sh for learning React.
            </small>
            <ul>
                <ListItem
                    link='/todo'
                    value='Todo App - Component Life Cycle, Lists and Keys && Render Props'
                />
                <ListItem
                    link='/reftest'
                    value='Test - Referencing Values with Refs && Responding to Events'
                />
                <ListItem
                    link='/hoc'
                    value='Higher-Order Components'
                />
            </ul>
        </>
    );
}

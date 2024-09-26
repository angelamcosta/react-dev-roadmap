import { hoc } from "@/components/Template";
import { UnorderedList } from "@/components/UnorderedList";

const Template = hoc(UnorderedList);

export default function Index() {
    return (
        <Template
            title='Hooks'
            subtitle='These are exercises for the Hooks section of roadmap.sh for learning React.'
            list={[{ link: "/basic-hooks/usestate", topic: "useState" }]}
            goBack={true}
        />
    );
}

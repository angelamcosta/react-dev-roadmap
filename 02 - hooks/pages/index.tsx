import { hoc } from "@/components/Template";
import { UnorderedList } from "@/components/UnorderedList";

const Template = hoc(UnorderedList);
const BASIC = "/basic-hooks";
const COMMON = "/common-hooks";

export default function Index() {
    const list = [
        { link: `${BASIC}/usestate`, topic: "useState" },
        { link: `${BASIC}/useeffect`, topic: "useEffect" },
        { link: `${COMMON}/useref`, topic: "useRef" },
    ];
    return (
        <Template
            title='Hooks'
            subtitle='These are exercises for the Hooks section of roadmap.sh for learning React.'
            list={list}
            goBack={true}
        />
    );
}

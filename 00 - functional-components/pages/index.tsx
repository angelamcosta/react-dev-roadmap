import { HelloWorld } from "@/components/HelloWorld";
import { HelloName } from "@/components/HelloName";
import Link from 'next/link'

// export default function Index() {
//     return <HelloWorld />;
// }

export default function Index() {
    return (
        <div>
            <HelloWorld /> {"and"} <HelloName name='Angie' />
            <Link href={'learning/jsx-learn'}>Todo app</Link>
        </div>
    );
}

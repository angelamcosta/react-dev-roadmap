import Link from "next/link";

interface LinkItem {
    link: string;
    topic: string;
}

interface UnorderedListProps {
    list: LinkItem[];
}

export function UnorderedList({ list }: UnorderedListProps) {
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>
                    <Link href={item.link}>{item.topic}</Link>
                </li>
            ))}
        </ul>
    );
}

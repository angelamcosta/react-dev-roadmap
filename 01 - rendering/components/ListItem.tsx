import Link from "next/link";

interface ItemProp {
    link: string;
    value: string;
}

export function ListItem({ link, value }: ItemProp) {
    return (
        <li>
            <Link href={link}>{value}</Link>
        </li>
    );
}

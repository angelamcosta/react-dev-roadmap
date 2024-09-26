import Link from "next/link";
import { HocEx } from "@/components/HOC";

export default function HOC() {
    return (
        <>
            <HocEx />
            <br />
            <Link href={"/"}>Go back</Link>
        </>
    );
}

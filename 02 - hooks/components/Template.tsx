import React from "react";
import Link from "next/link";

interface TemplateProps {
    title: string;
    subtitle: string;
    topics?: string;
    goBack?: boolean;
}

export function hoc<T extends object>(HocComponent: React.ComponentType<T>) {
    return (props: T & TemplateProps) => {
        const { title, subtitle, topics, goBack = false, ...restProps } = props;
        return (
            <div>
                <h1>{title}</h1>
                <small>{subtitle}</small>
                <h3>Topic(s): {topics}</h3>
                <br />
                <HocComponent {...(restProps as T)} />
                <br />
                {!goBack && <Link href={"/"}>Go back</Link>}
            </div>
        );
    };
}

import React from "react";

function hoc<T extends object>(HocComponent: React.ComponentType<T>) {
    return (props: T) => {
        const content = "Higher-Order Components";

        return (
            <div>
                <h1>{content}</h1>
                <HocComponent {...props} />
            </div>
        );
    };
}

function Quote() {
    return <small>This is another component</small>;
}

export const HocEx = hoc(Quote);

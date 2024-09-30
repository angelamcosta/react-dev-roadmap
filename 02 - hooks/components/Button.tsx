interface ButtonProps {
    name: string;
    type: "button" | "submit";
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ name, type, onClick }: ButtonProps) {
    return (
        <button type={type} onClick={onClick}>
            {name}
        </button>
    );
}

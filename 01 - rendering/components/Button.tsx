interface ButtonProps {
    type: "button" | "submit";
    value: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ type, value, onClick }: ButtonProps) {
    return (
        <button type={type} onClick={onClick}>
            {value}
        </button>
    );
}

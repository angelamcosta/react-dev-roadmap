interface InputProps {
    type: "text" | "checkbox";
    value: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function Input({ type, value, onChange }: InputProps) {
    return <input type={type} value={value} onChange={onChange} />;
}

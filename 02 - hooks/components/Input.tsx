interface InputProps {
    type: "text" | "checkbox";
    value?: string;
    checked?: boolean;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function Input({ type, checked, value, onChange }: InputProps) {
    return (
        <input
            type={type}
            checked={checked}
            value={value}
            onChange={onChange}
        />
    );
}

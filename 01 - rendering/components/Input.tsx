interface InputProps {
    type: "text" | "checkbox";
    value?: string;
    checked?: boolean;
    placeholder?: string;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function Input({ type, value, checked, placeholder, onClick, onChange }: InputProps) {
    return (
        <input
            type={type}
            value={value}
            checked={checked}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
        />
    );
}

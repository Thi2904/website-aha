import {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonVariant = "filled" | "outlined" | "header" ;
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
    outlined:
        "border border-[#C48F7F] text-[#C48F7F] bg-transparent hover:bg-[#C48F7F]/10",
    filled:
        "bg-[#C48F7F] text-black border border-transparent hover:bg-[#C48F7F]/90",
    header:
        "text-[#C48F7F] bg-transparent hover:bg-[#C48F7F]/10",
};

const sizeStyles: Record<ButtonSize, string> = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
}

export default function Button({
    variant = "filled",
    size = "medium",
    children,
    ...props    
}: ButtonProps) {
    return(
        <button
            className={`
                font-semibold uppercase rounded-md transition-colors durantion-200
                ${variantStyles[variant]} 
                ${sizeStyles[size]}
                `}
                {...props}
        >
            {children}
        </button>
    );
}
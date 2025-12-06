import type { ReactElement } from "react";
import "../index.css"

interface ButtonProps {
    variant: "primary" | "secondary",
    text: string;
    startIcon?: ReactElement;
}

const variantClasses = {
    "primary": "bg-indigo-800 text-white",
    "secondary": "bg-indigo-200 text-indigo-800"
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";


export function Button({variant, text, startIcon}: ButtonProps) {

    return <button className={variantClasses[variant] + " " +
    defaultStyles}>
        <div className="pr-2">
          {startIcon}
        </div>
        {text}
    </button>

}

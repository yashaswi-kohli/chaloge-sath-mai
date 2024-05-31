import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    { label, type = "text", placeholder, className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="my-4">
            {label && (
                <label className="block text-gray-700 mb-2" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full px-3 py-2 border border-gray-300 rounded ${className}`}
                {...props}
                ref={ref}
                id={id}
            />
        </div>
    );
});

export default Input;

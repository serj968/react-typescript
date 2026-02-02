import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
    // Define any props if needed
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">;

// Forward ref to allow parent components to access the input element
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, id, ...props },
     ref) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} id={id}  {...props} />
        </p>
    )
});

export default Input;
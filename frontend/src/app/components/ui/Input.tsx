import { forwardRef } from "react";

interface InputProp extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProp>(
  ({ className, error, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          {...props}
          className={`w-full h-12 bg-[#2a2a2a] rounded-lg px-4 text-white placeholder:text-gray-400 outline-none focus:border-white ${
            error ? "focus:border-red-500" : "border-gray-400"
          } ${className ?? ""}`}
          required={false}
        />
        <p className="mt-1 text-sm text-red-500">{error}</p>
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;

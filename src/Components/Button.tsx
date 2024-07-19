// Path: components/Button.tsx
import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "fourthiary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const buttonVariants = cva("flex text-center items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary_main hover:bg-primary_hover active:bg-primary_active disabled:bg-primary_disabled rounded-md gap-2 border border-gray-500 text-white",
      secondary:
        "bg-secondary_main hover:bg-secondary_hover active:bg-secondary_active disabled:bg-secondary_disabled rounded-md gap-2 border border-outlineButton text-outlineButton",
      tertiary:
        "bg-tertiary_main hover:bg-tertiary_hover active:bg-tertiary_active disabled:bg-tertiary_disabled rounded-md gap-2 border border-outlineButton text-outlineButton",
      fourthiary:
        "bg-fourthiary_main hover:bg-fourthiary_hover active:bg-fourthiary_active disabled:bg-fourthiary_disabled rounded-md gap-2 border border-gray-500 text-white",
    },
    size: {
      sm: "px-[0.625rem] py-2 rounded-[8px]",  
      md: "px-[0.625rem] py-3 rounded-lg",
      lg: "px-4 py-3 rounded-lg ",
      xl: "px-4 py-3 rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default function Button({
  variant = "primary",
  size = "md",
  className = "p-4",
  ...props
}: ButtonProps) {
  const combinedClassName = `${buttonVariants({ variant, size })} ${className}`;

  return <button {...props} className={combinedClassName} />;
}

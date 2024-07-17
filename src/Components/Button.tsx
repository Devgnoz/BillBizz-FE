// Path: components/Button.tsx
import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "fourthiary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const buttonVariants = cva("text-center flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-primary_main hover:bg-primary_hover active:bg-primary_active disabled:bg-primary_disabled rounded-md gap-2 border border-gray-500 text-white",
      secondary:
        "bg-secondary_main hover:bg-secondary_hover active:bg-secondary_active disabled:bg-secondary_disabled rounded-md gap-2 border border-gray-500 text-gray-900",
      tertiary:
        "bg-tertiary_main hover:bg-tertiary_hover active:bg-tertiary_active disabled:bg-tertiary_disabled rounded-md gap-2 border border-gray-500 text-gray-900",
      fourthiary:
        "bg-fourthiary_main hover:bg-fourthiary_hover active:bg-fourthiary_active disabled:bg-fourthiary_disabled rounded-md gap-2 border border-gray-500 text-white",
    },
    size: {
      sm: "w-[68px] h-[26px] p-[10px_12px] gap-[4px] rounded-tl-[8px] text-[10px]",
      md: "w-[80px] h-[32px] p-[10px_12px] gap-[4px] rounded-tl-[8px] text-[12px]",
      lg: "w-[120px] h-[38px] p-[16px_12px] gap-[8px] rounded-tl-[8px] text-[16px]",
      xl: "w-[148px] h-[48px] p-[16px_12px] gap-[10px] rounded-tl-[8px] text-[18px]",
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
  className = "",
  ...props
}: ButtonProps) {
  const combinedClassName = `${buttonVariants({ variant, size })} ${className}`;

  return <button {...props} className={combinedClassName} />;
}

import { cva } from "class-variance-authority";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "fourthiary";
  size?: "sm" | "md" | "lg" | "xl";
};

export default function Button({
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return <button {...props} className={buttonVariants({ variant, size })} />;
}

const buttonVariants = cva(
  "text-center rounded-md font-semibold flex items-center",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow-100 hover:bg-orange-200 rounded-md  gap-2 border border-gray-500 text-gray",
        secondary:
          "bg-red-900 hover:bg-red-800 rounded-md border  gap-2 border-gray-500 text-white",
        tertiary:
          "bg-orange-100 hover:bg-orange-200 border  gap-2 border-amber-900 text-amber-700",
        fourthiary:
          "bg-trasparant hover:bg-trasparant border  gap-2 border-gray-900 text-textColor",
      },
      size: {
        sm: "text-[10px] px-2 h-[28px]",
        md: "text-[12px] px-2 h-[30px]",
        lg: "text-[12px] px-3 h-[34px]",
        xl: "text-[12px] px-3 h-[34px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

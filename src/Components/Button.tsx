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

const buttonVariants = cva("text-center rounded-md font-semibold" , {
  variants: {
    variant: {
      primary:
        "bg-yellow-100 hover:bg-orange-200 rounded-md border border-gray-500 text-gray",
      secondary:
       "bg-red-900 hover:bg-red-800 rounded-md border border-gray-500 text-white",
      tertiary:
        "bg-orange-100 hover:bg-orange-200 border border-amber-900 text-amber-700",
      fourthiary:
        "bg-amber-600 hover:bg-amber-700 border border-amber-900 text-white",
    },
    size: {
      sm: "text-[10px] w-[68px] h-[28px]",
      md: "text-[12px] w-[78px] h-[30px]",
      lg: "text-[12px] w-[137px] h-[34px]",
      xl: "text-[12px] w-[148px] h-[34px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

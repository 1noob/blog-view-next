import { tv, type VariantProps } from "@/app/utils";

const buttonLinkVariants = tv({
  base: [
    "button-link",
    "inline-flex",
    "items-center",
    "border",
    "border-black/10",
    "dark:border-white/10",
    "font-semibold",
    "uppercase",
    "text-white",
    "!no-underline",
    "whitespace-nowrap",
    // "shadow-btn",
  ],
  variants: {
    variant: {
      primary: "bg-blue-700",
      secondary: "bg-green-700",
      highlight: "bg-highlight",
    },
    size: {
      medium: ["text-sm", "px-2", "py-1", "gap-1.5"],
      small: ["text-xs", "px-1.5", "py-0.5", "gap-1"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
type ButtonLinkVariants = VariantProps<typeof buttonLinkVariants>;
type ButtonLinkProps = ButtonLinkVariants &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

function ButtonLink(props: ButtonLinkProps) {
  const { variant, size, children, ...restProps } = props;
  return (
    <a {...restProps} className={buttonLinkVariants({ variant, size })}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 39.24 32.26"
        height=".65em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m29.1 18.43-6.19.44H0v-5.48h23.91l6.26.44L15.84 0h7.63l15.77 15.84v.58L23.47 32.26h-7.63Z" />
      </svg>
    </a>
  );
}

export { ButtonLink };

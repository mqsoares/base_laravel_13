import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        danger:
         "border-danger-secondary bg-danger-foreground text-danger [a&]:hover:bg-danger-secondary/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-primary-foreground",
        success:
         "border-success-secondary bg-success-foreground text-success [a&]:hover:bg-success-secondary/20 dark:bg-primary-foreground",
        info:
          "border-info-secondary bg-info-foreground text-info [a&]:hover:bg-info-secondary/20 dark:bg-primary-foreground dark:text-info-secondary",
        warning:
          "border-warning-secondary bg-warning-foreground text-warning [a&]:hover:bg-warning-secondary/20 dark:bg-primary-foreground",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)
export type BadgeVariants = VariantProps<typeof badgeVariants>

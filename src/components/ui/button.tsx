import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "ghost" | "outline"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const variants = {
      default: "bg-charcoal-800 text-ivory-100 hover:bg-charcoal-700",
      primary: "bg-forest-500 text-ivory-100 hover:bg-forest-600 shadow-md hover:shadow-lg",
      secondary: "border-2 border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-ivory-100",
      ghost: "text-charcoal-800 hover:bg-charcoal-100",
      outline: "border border-charcoal-300 bg-transparent hover:bg-charcoal-100"
    }

    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-9 px-4 text-sm",
      lg: "h-12 px-8 text-lg"
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

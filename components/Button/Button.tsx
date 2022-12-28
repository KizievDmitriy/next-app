import { ButtonProps } from "./ButtonProps"
import s from "./Button.module.css"
import cn from "classnames"

export const Button = ({ appearance, children, className, ...p }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(s.btn, className, {
                [s.primary]: appearance === 'primary',
                [s.secondary]: appearance === 'secondary'
            })}
            {...p}
        >
            {children}
        </button>);
}
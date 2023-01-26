import { ButtonProps } from "./ButtonProps";
import s from "./Button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

export const Button = ({ appearance, arrow = 'none', children, className, ...p }: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(s.btn, className, {
                [s.primary]: appearance === 'primary',
                [s.secondary]: appearance === 'secondary'
            })}
            {...p}
        >
            {children}
            {arrow !== 'none' &&
                <ArrowIcon className={cn(s.arrow, { [s.down]: arrow === 'down' })} />
            }
        </button>);
}
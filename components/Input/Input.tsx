import { InputProps } from "./InputProps";
import s from "./Input.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ className, error, ...p }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (

        <div className={cn(className, s.wrapper)}>
            <input className={cn(s.input, {
                [s.error]: error
            })}
                ref={ref}
                {...p}
            />
            {error && <span role='alert' className={s.errMessage}>{error.message}</span>}
        </div>
    )
});
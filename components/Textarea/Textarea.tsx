import { TextareaProps } from "./TextareaProps";
import s from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(({ className, error, ...p }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
        <div className={cn(className, s.wrapper)}>
            <textarea
                className={cn(s.textarea, {
                    [s.error]: error
                })}
                {...p}
                ref={ref}
            />
            {error && <span role='alert' className={s.errMessage}>{error.message}</span>}
        </div>
    )
});
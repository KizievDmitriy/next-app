import { CardProps } from "./CardProps";
import s from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Card = forwardRef(({ color = 'white', children, className, ...p }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return (
        <div className={cn(s.card, className, {
            [s.blue]: color === 'blue'
        })}
            {...p}
            ref={ref}
        >
            {children}
        </div>
    );
});
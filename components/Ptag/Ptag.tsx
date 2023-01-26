import { PtagProps } from "./PtagProps";
import s from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({ size = 'm', children, className, ...p }: PtagProps): JSX.Element => {
    return (
        <p
            className={cn(className,
                {
                    [s.s]: size === 's',
                    [s.m]: size === 'm',
                    [s.l]: size === 'l'
                })}
            {...p}
        >
            {children}
        </p>
    )
}
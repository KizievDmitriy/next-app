import { TagProps } from "./TagProps";
import s from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({ size = 's', color = 'transparen', href, children, className, ...p }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(s.tag, className,
                {
                    [s.s]: size === 's',
                    [s.m]: size === 'm',
                    [s.transparen]: color === 'transparen',
                    [s.red]: color === 'red',
                    [s.green]: color === 'green',
                    [s.gray]: color === 'gray',
                    [s.primary]: color === 'primary'
                })}
            {...p}
        >
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
}
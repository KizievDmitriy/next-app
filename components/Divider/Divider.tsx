import { DividerProps } from "./DividerProps"
import s from "./Divider.module.css"
import cn from "classnames"

export const Divider = ({ className, ...p }: DividerProps): JSX.Element => {
    return (
        <hr className={cn(className, s.hr)} {...p} />
    )
}
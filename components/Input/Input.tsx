import { InputProps } from "./InputProps"
import s from "./Input.module.css"
import cn from "classnames"

export const Input = ({ className, ...p }: InputProps): JSX.Element => {
    return (
        <input
            className={cn(className, s.input)}
            {...p}
        >
        </input>
    )
}
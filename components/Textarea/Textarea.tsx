import { TextareaProps } from "./TextareaProps"
import s from "./Textarea.module.css"
import cn from "classnames"

export const Textarea = ({ className, ...p }: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, s.textarea)} {...p} />)
}
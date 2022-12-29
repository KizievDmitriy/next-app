import { FooterProps } from "./FooterProps"
import s from "./Footer.module.css"
import cn from "classnames"

export const Footer = ({ ...p }: FooterProps): JSX.Element => {
    return (
        <div {...p}>
            Footer
        </div>
    )
}
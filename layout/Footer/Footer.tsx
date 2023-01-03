import { FooterProps } from "./FooterProps"
import s from "./Footer.module.css"
import cn from "classnames"
import { format } from 'date-fns'

export const Footer = ({ className, ...p }: FooterProps): JSX.Element => {
    return (
        <footer {...p} className={cn(className, s.footer)}>
            <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <a href="#" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a>
        </footer>
    )
}
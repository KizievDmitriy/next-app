import { SidebarProps } from "./SidebarProps"
import s from "./Sidebar.module.css"
import cn from "classnames"
import { Menu } from "../Menu/Menu"
import Logo from "../logo.svg"
import { Search } from "../../components"

export const Sidebar = ({ className, ...p }: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, s.sidebar)} {...p}>
            <Logo className={s.logo} />
            <Search />
            <Menu />
        </div>
    )
}
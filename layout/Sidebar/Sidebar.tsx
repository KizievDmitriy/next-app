import { SidebarProps } from "./SidebarProps"
import s from "./Sidebar.module.css"
import cn from "classnames"
import { Menu } from "../Menu/Menu"

export const Sidebar = ({ ...p }: SidebarProps): JSX.Element => {
    return (
        <div {...p}>
            <Menu />
        </div>
    )
}
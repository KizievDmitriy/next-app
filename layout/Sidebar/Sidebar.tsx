import { SidebarProps } from "./SidebarProps"
import s from "./Sidebar.module.css"
import cn from "classnames"

export const Sidebar = ({ ...p }: SidebarProps): JSX.Element => {
    return (
        <div {...p}>
            SIDEBAR
        </div>
    )
}
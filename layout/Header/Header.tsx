import { HeaderProps } from "./HeaderProps";
import s from "./Header.module.css";
import cn from "classnames";

export const Header = ({ ...p }: HeaderProps): JSX.Element => {
    return (
        <div {...p}>
            Header
        </div>
    )
}
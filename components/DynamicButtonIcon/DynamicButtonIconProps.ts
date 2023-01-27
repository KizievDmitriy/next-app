import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cansel from "./cansel.svg";
import menu from "./menu.svg";

export const icons = {
    cansel,
    menu
};

export type IconName = keyof typeof icons;

export interface DynamicButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName;
    appearance: 'primary' | 'secondary';
}
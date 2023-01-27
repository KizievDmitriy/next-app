import { DynamicButtonIconProps, icons } from "./DynamicButtonIconProps";
import s from "./DynamicButtonIcon.module.css";
import cn from "classnames";

export const DynamicButtonIcon = ({ appearance, icon, children, className, ...p }: DynamicButtonIconProps): JSX.Element => {
    const IconComponent = icons[icon];

    return (
        <button
            className={cn(s.btn, className, {
                [s.primary]: appearance === 'primary',
                [s.secondary]: appearance === 'secondary'
            })}
            {...p}
        >
            <IconComponent />
        </button>);
}
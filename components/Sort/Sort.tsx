import { SortEnum, SortProps } from "./SortProps";
import SortIcon from "./sort.svg";
import s from "./Sort.module.css";
import cn from "classnames";

export const Sort = ({ sort, setSort, className, ...p }: SortProps): JSX.Element => {
    return (
        <div className={cn(s.sort, className)} {...p}>
            <span
                onClick={() => setSort(SortEnum.Raiting)}
                className={cn({
                    [s.active]: sort === SortEnum.Raiting
                })}
            >
                <SortIcon className={s.icon} />По рейтингу
            </span>
            <span
                onClick={() => setSort(SortEnum.Price)}
                className={cn({
                    [s.active]: sort === SortEnum.Price
                })}
            >
                <SortIcon className={s.icon} />По цене
            </span>
        </div>
    )
}
import { SortEnum, SortProps } from "./SortProps";
import SortIcon from "./sort.svg";
import s from "./Sort.module.css";
import cn from "classnames";

export const Sort = ({ sort, setSort, className, ...p }: SortProps): JSX.Element => {
    return (
        <div className={cn(s.sort, className)} {...p}>
            <button
                onClick={() => setSort(SortEnum.Raiting)}
                className={cn(s.btnSort, {
                    [s.active]: sort === SortEnum.Raiting
                })}
            >
                <SortIcon className={s.icon} />По рейтингу
            </button>
            <button
                onClick={() => setSort(SortEnum.Price)}
                className={cn(s.btnSort, {
                    [s.active]: sort === SortEnum.Price
                })}
            >
                <SortIcon className={s.icon} />По цене
            </button>
        </div>
    )
}
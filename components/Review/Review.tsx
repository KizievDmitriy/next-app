import { ReviewProps } from "./ReviewProps";
import UserIcon from "./user.svg";
import s from "./Review.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Raiting } from "../Raiting/Raiting";

export const Review = ({ review, className, ...p }: ReviewProps): JSX.Element => {
    const { name, title, description, createdAt, rating } = review;

    return (
        <div className={cn(s.review, className)}
            {...p}
        >
            <UserIcon className={s.icon} />
            <div className={s.title}>
                <span className={s.name}>{name}:</span>
                <span>{title}</span>
            </div>
            <div className={s.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
            </div>
            <div className={s.rait}>
                <Raiting rating={rating} />
            </div>
            <div className={s.descr}>
                {description}
            </div>
        </div>
    );
}
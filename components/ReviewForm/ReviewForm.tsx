import { ReviewFormProps } from "./ReviewFormProps"
import s from "./ReviewForm.module.css"
import cn from "classnames"
import { Input } from "../Input/Input";
import { Raiting } from "../Raiting/Raiting";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseSubmitIcon from "./closeSubmit.svg"

export const ReviewForm = ({ productId, className, ...p }: ReviewFormProps): JSX.Element => {

    return (
        <>
            <div className={cn(s.reviewForm, className)} {...p}>
                <Input placeholder="Имя" />
                <Input placeholder="Заголовок отзыва" className={s.title} />
                <div className={s.raitingWrapper}>
                    <span>Оценка:</span>
                    <Raiting raiting={0} />
                </div>
                <Textarea className={s.textarea} placeholder="Текст отзыва" />
                <div className={s.submitWrapper}>
                    <Button appearance="primary" className={cn(className, s.btn)}>Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={s.success}>
                <b>Ваш отзыв отправлен, он будет опубликован после проверки.</b>
                <CloseSubmitIcon className={s.close} />
            </div>
        </>
    );
}
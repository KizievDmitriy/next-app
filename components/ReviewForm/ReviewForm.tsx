import { ReviewFormProps } from "./ReviewFormProps";
import s from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Raiting } from "../Raiting/Raiting";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseSubmitIcon from "./closeSubmit.svg"
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({ productId, className, ...p }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(s.reviewForm, className)} {...p}>
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder="Имя"
                    error={errors.name}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                    className={s.title}
                />
                <div className={s.raitingWrapper}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='raiting'
                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                        render={({ field }) => (
                            <Raiting
                                isEditable
                                raiting={field.value}
                                ref={field.ref}
                                setRaiting={field.onChange}
                                error={errors.raiting}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Заполните поле' } })}
                    className={s.textarea}
                    placeholder="Текст отзыва"
                    error={errors.description}
                />
                <div className={s.submitWrapper}>
                    <Button appearance="primary" type="button" aria-label="Отправить" className={cn(className, s.btn)}>Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={s.success}>
                <b>Ваш отзыв отправлен, он будет опубликован после проверки.</b>
                <CloseSubmitIcon className={s.close} />
            </div>
        </form>
    );
}
import { ReviewFormProps } from "./ReviewFormProps";
import s from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Raiting } from "../Raiting/Raiting";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseSubmitIcon from "./closeSubmit.svg"
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { useState } from "react";
import { API } from "../../helpers/api";

export const ReviewForm = ({ productId, className, ...p }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setIsError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что то пошло не так')
            }
        } catch (e) {
            setIsError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(s.reviewForm, className)} {...p}>
                <Input
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                    placeholder="Имя"
                    error={errors.name}
                    aria-invalid={errors.name ? true : false}
                />
                <Input
                    {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
                    placeholder="Заголовок отзыва"
                    error={errors.title}
                    className={s.title}
                    aria-invalid={errors.title ? true : false}
                />
                <div className={s.raitingWrapper}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                        render={({ field }) => (
                            <Raiting
                                isEditable
                                rating={field.value}
                                ref={field.ref}
                                setRating={field.onChange}
                                error={errors.rating}
                            />
                        )}
                    />
                </div>
                <Textarea
                    {...register('description', { required: { value: true, message: 'Заполните поле' } })}
                    className={s.textarea}
                    placeholder="Текст отзыва"
                    error={errors.description}
                    aria-label='текст отзыва'
                    aria-invalid={errors.description ? true : false}
                />
                <div className={s.submitWrapper}>
                    <Button
                        appearance="primary"
                        type="submit"
                        aria-label="Отправить"
                        className={cn(className, s.btn)}
                        onClick={() => clearErrors()}
                    >Отправить</Button>
                    <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={s.success}>
                <b>Ваш отзыв отправлен, он будет опубликован после проверки.</b>
                <CloseSubmitIcon className={s.close} onClick={() => setIsSuccess(false)} />
            </div>}
            {error && <div className={s.error}>
                <b>{error}</b>
                <CloseSubmitIcon className={cn(s.close, s.closeErr)} onClick={() => setIsError(undefined)} />
            </div>}
        </form>
    );
}
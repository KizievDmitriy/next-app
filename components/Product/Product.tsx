import { ProductProps } from "./ProductProps"
import Image from 'next/image'
import s from "./Product.module.css"
import cn from "classnames"
import { Card } from "../Card/Card";
import { Raiting } from "../Raiting/Raiting";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

// eslint-disable-next-line react/display-name
export const Product = motion(forwardRef(({ product, className, ...p }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const src = process.env.NEXT_PUBLIC_DOMAIN + product.image;
    const [isRewiewOpen, setIsRewiewOpen] = useState<boolean>(false);
    const rewieRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: { opacity: 0, height: 0 }
    };

    const scrollToRewie = () => {
        setIsRewiewOpen(true);
        rewieRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        rewieRef.current?.focus();
    };

    return (
        <div className={className} {...p} ref={ref}>
            <Card className={cn(s.product)} color='white'>
                <div className={s.logo}>
                    <Image src={src} alt={product.title} width={70} height={70} />
                </div>
                <div className={s.title}>{product.title}</div>
                <div className={s.price}>
                    {priceRu(product.price) + ' '}
                    {product.oldPrice && <Tag color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={s.credit}>{priceRu(product.credit)}/<span>мес</span></div>
                <div className={s.raiting}><Raiting raiting={product.rewiewAvg ?? product.initialRating} /></div>
                <div className={s.tags}>{product.categories.map(c => <Tag className={s.tag} color="transparen" key={c}>{c}</Tag>)}</div>
                <div className={s.priceTitle}>Цена</div>
                <div className={s.creditTitle}>Кредит</div>
                <div className={s.rewie}>
                    <a href="#ref" onClick={scrollToRewie}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
                </div>
                <Divider className={s.hr} />
                <div className={s.description}>{product.description}</div>
                <div className={s.feature}>
                    {product.characteristics.map(c => (
                        <div className={s.characteristics} key={c.name}>
                            <span className={s.charName}>{c.name}</span>
                            <span className={s.charDots}></span>
                            <span>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={s.advWrapper}>
                    {product.advantages && <div className={s.advantages}>
                        <div className={s.advTitle}>Преимущества</div>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={s.disadvantages}>
                        <div className={s.advTitle}>Недостатки</div>
                        <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(s.hr, s.hr2)} />
                <div className={s.actions}>
                    <Button
                        appearance="primary"
                        type="button"
                        aria-label="Узнать потробнее"
                    >Узнать потробнее</Button>
                    <Button
                        type="button"
                        aria-label="Читать отзывы"
                        appearance="secondary"
                        arrow={!isRewiewOpen ? 'right' : 'down'}
                        onClick={() => setIsRewiewOpen(!isRewiewOpen)}>Читать отзывы</Button>
                </div>
            </Card>
            <motion.div
                animate={isRewiewOpen ? 'visible' : 'hidden'}
                variants={variants}
                initial='hidden'
            >
                <Card color='blue' className={s.rewiew} ref={rewieRef} tabIndex={0}>
                    {product.reviewCount === 0 ? 'Пока нет отзывов' : (product.reviews.map(r => (
                        <div key={r._id}>
                            <Review review={r} />
                            <Divider />
                        </div>
                    )))}
                    <ReviewForm productId={product._id} />
                </Card>
            </motion.div>
        </div>
    );
}));
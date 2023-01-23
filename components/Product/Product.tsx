import { ProductProps } from "./ProductProps"
import Image from 'next/image'
import s from "./Product.module.css"
import cn from "classnames"
import { Card } from "../Card/Card";
import { Raiting } from "../Raiting/Raiting";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";

export const Product = ({ product, className, ...p }: ProductProps): JSX.Element => {
    const src = process.env.NEXT_PUBLIC_DOMAIN + product.image;

    return (
        <Card className={cn(s.product)} color='white'>
            <div className={s.logo}>
                <Image loader={() => src} src={src} alt={product.title} width={70} height={70} unoptimized />
            </div>
            <div className={s.title}>{product.title}</div>
            <div className={s.price}>{product.price}</div>
            <div className={s.credit}>{product.credit}</div>
            <div className={s.raiting}><Raiting raiting={product.rewiewAvg ?? product.initialRating} /></div>
            <div className={s.tags}>{product.categories.map(c => <Tag color="transparen" key={c}>{c}</Tag>)}</div>
            <div className={s.priceTitle}>Цена</div>
            <div className={s.creditTitle}>Кредит</div>
            <div className={s.rewie}>{product.reviewCount} отзывов</div>
            <div className={s.hr}><hr /></div>
            <div className={s.description}>{product.description}</div>
            <div className={s.feature}>фичи</div>
            <div className={s.advWrapper}>
                <div className={s.advantages}>
                    <div>Преимущества</div>
                    <div>{product.advantages}</div>
                </div>
                <div className={s.disadvantages}>
                    <div>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>
            </div>
            <div className={s.hr}><hr /></div>
            <div className={s.actions}>
                <Button appearance="primary">Узнать потробнее</Button>
                <Button appearance="secondary" arrow="right">Читать отзывы</Button>
            </div>
        </Card>
    );
}
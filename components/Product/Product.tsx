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

export const Product = ({ product, className, ...p }: ProductProps): JSX.Element => {
    const src = process.env.NEXT_PUBLIC_DOMAIN + product.image;


    return (
        <Card className={cn(s.product)} color='white'>
            <div className={s.logo}>
                <Image loader={() => src} src={src} alt={product.title} width={70} height={70} unoptimized />
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
            <div className={s.rewie}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
            <Divider className={s.hr} />
            <div className={s.description}>{product.description}</div>
            <div className={s.feature}>фичи</div>
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
            <Divider className={s.hr} />
            <div className={s.actions}>
                <Button appearance="primary">Узнать потробнее</Button>
                <Button appearance="secondary" arrow="right">Читать отзывы</Button>
            </div>
        </Card>
    );
}
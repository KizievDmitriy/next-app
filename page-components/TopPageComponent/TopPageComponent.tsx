import s from "./TopPageComponent.module.css"
import cn from "classnames"
import { TopPageComponentProps } from "./TopPageComponentProps"
import { HhData, Htag, Tag } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='m'>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={s.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='m'>hh.ru</Tag>}
            </div>
            {firstCategory === TopLevelCategory.Courses && < HhData {...page.hh} />}
        </div>
    )
}
import s from "./TopPageComponent.module.css"
import { TopPageComponentProps } from "./TopPageComponentProps"
import { Advantages, HhData, Htag, Ptag, Sort, Tag } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"
import { SortEnum } from "../../components/Sort/SortProps"

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='m'>{products.length}</Tag>}
                <Sort sort={SortEnum.Raiting} setSort={() => { }} />
            </div>
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={s.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                {products && <Tag color='red' size='m'>hh.ru</Tag>}
            </div>
            {firstCategory === TopLevelCategory.Courses && page.hh && < HhData {...page.hh} />}
            {page.advantages && page.advantages.length > 0 &&
                <>
                    <Htag tag='h2'>Преимущества</Htag>
                    <Advantages advantages={page.advantages} />
                </>
            }
            {page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
            }
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t =>
                <Tag key={t} color='primary'>{t}</Tag>
            )}
        </div>
    )
}
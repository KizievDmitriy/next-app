import s from "./Menu.module.css"
import cn from "classnames"
import { useContext } from "react"
import { AppContext } from "../../context/app.context"
import { FirstLavelMenuItem, PageItem } from "../../interfaces/menu.interface"
import CoursesIcon from "./icons/course.svg"
import BooksIcon from "./icons/books.svg"
import ServiceIcon from "./icons/service.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "../../interfaces/page.interface"

const firstLavelMenu: FirstLavelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLavel = () => {
        return (
            <>
                {firstLavelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(s.firstLavel, {
                                [s.firstLavelAcive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLavel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLavel = (menuItem: FirstLavelMenuItem) => {
        return (
            <div className={s.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={s.secondLavel}>{m._id.secondCategory}</div>
                        <div className={cn(s.secondLavelBlock, {
                            [s.secondLavelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdtLavel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdtLavel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a key={p.category} href={`/${route}/${p.alias}`} className={cn(s.thirdtLavel, {
                    [s.thirdtLavelActive]: false
                })}>
                    {p.category}
                </a>)
            )
        );
    };

    return (
        <div className={s.menu}>
            {buildFirstLavel()}
            {/* <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul> */}
        </div>
    )
}
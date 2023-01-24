import CoursesIcon from "./icons/course.svg"
import BooksIcon from "./icons/books.svg"
import ServiceIcon from "./icons/service.svg"
import ProductsIcon from "./icons/products.svg"
import { TopLevelCategory } from "../interfaces/page.interface"
import { FirstLavelMenuItem } from "../interfaces/menu.interface"

export const firstLavelMenu: FirstLavelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'service', name: 'Сервисы', icon: <ServiceIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {  //cсклонение слов в зависимости от числа ,1 отзЫВ, ,3 отзыВА, 9 отзывОВ ...
    const cases = [2, 0, 1, 1, 1, 2]
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
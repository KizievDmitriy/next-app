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
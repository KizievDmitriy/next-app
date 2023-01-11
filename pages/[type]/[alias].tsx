import { withLayout } from '../../layout/Layout'
import { MenuItem } from '../../interfaces/menu.interface'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface'
import { ParsedUrlQuery } from 'querystring'
import { ProductModel } from '../../interfaces/product.interface'
import { firstLavelMenu } from '../../helpers/helpers'

function Course({ menu, page, products }: CourseProps) {

    return (
        <>
            {products && products.length}
        </>
    )
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];

    for (const m of firstLavelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(
            process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    console.log(paths);
    return {
        paths,
        fallback: true
    };
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) {
        return {
            notFound: true
        };
    };

    const firstCategoryItem = firstLavelMenu.find(m => m.route === params.type);

    if (!firstCategoryItem) {
        return {
            notFound: true
        };
    };

    const { data: menu } = await axios.post<MenuItem[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory: firstCategoryItem.id });

    const { data: page } = await axios.get<TopPageModel>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);

    const { data: products } = await axios.post<ProductModel[]>(
        process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10
    });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id,
            page,
            products
        }
    };
}

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}
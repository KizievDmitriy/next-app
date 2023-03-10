import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { API } from "../../helpers/API";
import { firstLavelMenu } from "../../helpers/helpers";
import { MenuItem } from "../../interfaces/menu.interface";
import { withLayout } from "../../layout/Layout";



function Type({ firstCategory }: TypeProps): JSX.Element {

    return (
        <>
            Type: {firstCategory}
        </>
    )
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: firstLavelMenu.map(m => '/' + m.route),
        fallback: true
    };
}

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });

    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    }
}

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
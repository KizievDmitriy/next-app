import { LayoutProps } from "./LayoutProps"
import s from "./Layout.module.css"
import cn from "classnames"
import { Header } from "./Header/Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Footer } from "./Footer/Footer"
import { FunctionComponent } from "react"

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={s.wrapper}>
            <Header className={s.header} />
            <Sidebar className={s.sidebar} />
            <div className={s.body}>{children}</div>
            <Footer className={s.footer} />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
import s from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLavelMenuItem, PageItem } from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLavelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 15,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }

        },
        hidden: {
            marginBottom: 0
        }
    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29,
            transform: `translate(10%, 0)`
        },
        hidden: {
            opacity: 0,
            height: 0,
            transform: `translate(30%, 0)`
        }
    }

    const openSecondLavel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened
            }
            return m;
        }))
    }

    const buildFirstLavel = () => {
        return (
            <>
                {firstLavelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`} legacyBehavior>
                            <a>
                                <div className={cn(s.firstLavel, {
                                    [s.firstLavelAcive]: m.id === firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id === firstCategory && buildSecondLavel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLavel = (menuItem: FirstLavelMenuItem) => {
        return (
            <div className={s.secondBlock}>
                {menu.map(m => {
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={s.secondLavel} onClick={() => openSecondLavel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <motion.div
                                className={cn(s.secondLavelBlock)}
                                layout
                                variants={variants}
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                            >
                                {buildThirdtLavel(m.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdtLavel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <motion.div key={p._id}
                    variants={variantsChildren}
                >
                    <Link href={`/${route}/${p.alias}`} legacyBehavior>
                        <a className={cn(s.thirdtLavel, {
                            [s.thirdtLavelActive]: `/${route}/${p.alias}` === router.asPath
                        })}>
                            {p.category}
                        </a>
                    </Link>
                </motion.div>)
            )
        );
    };

    return (
        <div className={s.menu}>
            {buildFirstLavel()}
        </div>
    )
}
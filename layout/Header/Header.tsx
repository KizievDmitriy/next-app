import { HeaderProps } from "./HeaderProps";
import s from "./Header.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import { DynamicButtonIcon } from "../../components";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Header = ({ className, ...p }: HeaderProps): JSX.Element => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false)
    }, [router])

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    }

    return (
        <header className={cn(className, s.header)} {...p}>
            <Logo />
            <DynamicButtonIcon appearance="secondary" icon="menu" onClick={() => setIsOpened(true)} />
            <motion.div className={s.mobMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <DynamicButtonIcon appearance="secondary" icon="cansel" className={s.btnCansel} onClick={() => setIsOpened(false)} />
            </motion.div>
        </header>
    )
}
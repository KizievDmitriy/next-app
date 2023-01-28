import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useScrollY } from "../../helpers/helpers";
import s from "./BtnUp.module.css";
import BtnUpIcon from "./btnUp.svg"

export const BtnUp = ({ ...p }): JSX.Element => {
    const control = useAnimation();
    const y = useScrollY();
    useEffect(() => {
        control.start({ opacity: y / document.body.scrollHeight })
    }, [y, control])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <motion.button
            type="button"
            aria-label="scroll to top"
            className={s.btn}
            {...p}
            onClick={scrollToTop}
            animate={control}
            initial={{ opacity: 0 }}
        >
            <BtnUpIcon />
        </motion.button>
    );
};
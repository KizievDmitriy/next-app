import { AdvantagesProps } from "./AdvantagesProps";
import CheckIcon from "./check.svg";
import s from "./Advantages.module.css";



export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={s.adv}>
                    <CheckIcon />
                    <div className={s.title}>{a.title}</div>
                    <span className={s.vline} />
                    <div>{a.description}</div>
                </div>
            ))}
        </>
    );
}
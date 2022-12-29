import { RaitingProps } from "./RaitingProps"
import s from "./Raiting.module.css"
import cn from "classnames"
import StarIcon from "./star.svg"
import { useEffect, useState } from "react"

export const Raiting = ({ isEditable = false, raiting, setRaiting, children, ...p }: RaitingProps): JSX.Element => {
    const [raitingArr, setRaitingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRaiting = (currentRaiting: number) => {
        const updatedArr = raitingArr.map((r: JSX.Element, i: number) => {
            return (
                <StarIcon
                    key={i}
                    className={
                        cn(s.star, {
                            [s.filled]: i < currentRaiting,
                        })}
                />
            )
        });
        setRaitingArr(updatedArr);
    }

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    return (
        <div {...p}>
            {raitingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}
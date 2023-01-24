import { RaitingProps } from "./RaitingProps"
import s from "./Raiting.module.css"
import cn from "classnames"
import StarIcon from "./star.svg"
import { KeyboardEvent, useEffect, useState } from "react"

export const Raiting = ({ isEditable = false, raiting, setRaiting, children, ...p }: RaitingProps): JSX.Element => {
    const [raitingArr, setRaitingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRaiting(i);
    }
    const onClick = (i: number) => {
        if (!isEditable || !setRaiting) {
            return;
        }
        setRaiting(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code !== 'Space' || !setRaiting) {
            return;
        }
        setRaiting(i);
    }

    const constructRaiting = (currentRaiting: number) => {
        const updatedArr = raitingArr.map((r: JSX.Element, i: number) => {
            return (
                <div key={i}
                    className={
                        cn(s.star, {
                            [s.filled]: i < currentRaiting,
                            [s.editeble]: isEditable
                        })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(raiting)}
                    onClick={() => { onClick(i + 1) }}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </div>

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
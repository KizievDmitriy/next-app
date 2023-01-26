/* eslint-disable react/display-name */
import { RaitingProps } from "./RaitingProps";
import s from "./Raiting.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState } from "react"

export const Raiting = forwardRef(({ isEditable = false, error, raiting, setRaiting, children, ...p }: RaitingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [raitingArr, setRaitingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaiting(raiting);
    }, [raiting]);

    const constructRaiting = (currentRaiting: number) => {
        const updatedArr = raitingArr.map((_r: JSX.Element, i: number) => {
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
    };



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

    return (
        <div {...p} ref={ref} className={cn(s.wrapper, {
            [s.error]: error
        })}>
            {raitingArr.map((r, i) => (<span key={i} className={error && s.error}>{r}</span>))}
            {error && <span className={s.errMessage}>{error.message}</span>}
        </div>
    )
});
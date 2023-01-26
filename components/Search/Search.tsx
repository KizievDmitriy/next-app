import { SearchProps } from "./SearchProps";
import s from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...p }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const toSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == 'Enter') {
            toSearch();
        }
    };

    return (
        <div
            className={cn(className, s.wrapper)}
            {...p}
        >
            <Input
                className={s.input}
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance="primary"
                className={s.btn}
                onClick={toSearch}
            >
                <SearchIcon />
            </Button >
        </div>
    )
}
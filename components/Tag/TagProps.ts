import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes <HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'transparen' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}
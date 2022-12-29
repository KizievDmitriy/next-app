import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HtmlHTMLAttributes <HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l';
    children: ReactNode;
}
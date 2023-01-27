import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface RaitingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    raiting: number;
    setRaiting?: (raiting: number) => void;
    error?: FieldError;
}
import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isValid: boolean;
}
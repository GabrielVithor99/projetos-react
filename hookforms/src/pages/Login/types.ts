import { UseFormHandleSubmit } from "react-hook-form";

export interface IFormLogin {
    nome: string;
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: '',
    nome:''
}
import {styled} from "styled-components";
import { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    height:50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color:#0A0A0A;
    color: #fff;
`;

export const Logo =  styled.img`
    height:36px;    
    &:hover{
        cursor:pointer;
    }
`
export const Row = styled.div`
    display: flex;
    align-items: center;    
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Wrapper = styled.div`
background-color: #151515;
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
`;

export const SearchInputContainer = styled.div`
    width: 270px;
    height: 32px;
    background-color: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
`;

export const Menu = styled.div`
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;

export const MenuRight = styled(Menu)`
   font-family: 'Open Sans', sans-serif;
   font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`;


export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff;
`;

export const Input = styled.input`  
    background-color: transparent;
    flex: 1;
    border: none;
    color: #fff;
    outline: none;
`;
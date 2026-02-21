import { styled  } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`;

export const TitleHighlight = styled.span`
    color: #ed6f92;
`;

export const Wrapper = styled.div`
max-width: 300px;
`;

export const Column = styled.div`
flex: 1;
`
export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin-top: 20px;
`;

export const ErrorText = styled.p`
    color: #ff3333;
    font-size: 12px;
`

export const TitleLogin = styled.h3`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;

`;

export const SubtitleLogin = styled.h4`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
    color: #FFFFFF;

`;


export const ForgetText = styled.p`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 19px;

    color: #dfda59;

    &: hover {
        cursor: pointer;
        color: #fff946;
    }
`;

export const CreateText = styled.p`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 19px;
    color:#ee55ee;
    
    &: hover {
        cursor: pointer;
        color: #ed6f92;
    }
`;
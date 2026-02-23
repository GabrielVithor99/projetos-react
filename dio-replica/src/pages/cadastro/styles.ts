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

export const Content = styled.p`
    display:flex;
    justify-content: start;
    align-items: center;
    font-family:'Open Sans', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    width: 320px;
    margin: 20px 0;
    line-height: 18px;
    color: #FFFFFF;
`;

export const ContentHighLight = styled.p`
    font-weight: 700;
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

export const LoginText = styled.p`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    line-height: 18px;
    color: #FFFFFF;
`;

export const LoginLink = styled.a`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 35px;
    margin-left:5px;
    line-height: 18px;
    color: #23DD7A;
    
    &: hover {
        cursor: pointer;
        color: #fff946;
    }
`;
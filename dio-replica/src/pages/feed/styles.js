import { styled  } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`

export const Title = styled.h3`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom:20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleHighlight = styled.h3`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    width: 320px;
    margin-bottom:20px;
    line-height: 44px;
    color:#cccccc;
`

export const TextContent = styled.p`
    font-family:'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    width: 420px;
    margin-bottom: 20px;
`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right:48px;
`;
import {styled} from 'styled-components';

export const InputContainer = styled.div`
  max-width: 270px;
  width: 100%;
  height: 33px;
  border-bottom: 2px solid #565656;

  display: flex;
    align-items: center;
    margin-bottom: 20px;
    `;

export const IconContainer = styled.div`
    margin-right: 10px;
    `;
    
export const InputText = styled.input`
    width:100%;
    background-color: transparent;
    border: none;
    color: #fff;
    height: 3pxpx;
    outline:none;
    padding-left:10px;
`

export const ErrorText = styled.p`
    margin: 10px auto;
    color: #ff3333;
    font-size:12px;
`;

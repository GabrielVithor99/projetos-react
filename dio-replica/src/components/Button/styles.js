import {styled} from 'styled-components';
import {css} from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #565656;
  border-radius: 22px;
  position: relative;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

    &:hover {
    cursor: pointer;
    background-color: #e4105d;
  }

  ${({variant}) => variant !== 'primary' && css`
    width:calc(100% - 20px);
    min-width: 167px;
    height: 33px;
    background-color: #e4105d;

    &::after {
      content: '';
      position: absolute;
      border: 2px solid #e4105d;
      top: -6px;
      left: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 22px;
  }

       &:hover {
        cursor: pointer;
        color: #222;
  `}

`;  
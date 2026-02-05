import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #282c34;
color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

export const Content = styled.div`
background-color: #3b3f46;
border-radius: 10px;
padding: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
width: 300px;
height: 400px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;
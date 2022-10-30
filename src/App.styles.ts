import styled from "styled-components";


export const Header = styled.header`
  max-width: 100%;
  width: 100%;
  background: white;
  height: 52px;
  padding: 0px 24px;
  box-shadow: 0px 4px 6px rgba(182, 182, 182, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 24px;
  color: black;
  font-weight: bold;
  
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color:#f5f6fa;
  
`;

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 96px 24px;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 776px) {
    flex-direction: column;
  }
`;

export const PlayerBox = styled.div`
  width: 100%;
  
`;

export const Player = styled.div`
  width: 100%;
  height: 400px;
  background: white;
  border: 1px solid black;
`;

export const H1 = styled.h1``;

export const H2 = styled.h2`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const P = styled.p``;

export const Row = styled.div`
  display: flex;
  gap: 16px;
`;

export const WordBox = styled.div`
  width: 100%;
  padding: 8px;
  max-height: 600px;
  overflow-y: scroll;
  border: 1px solid black;

  @media screen and (min-width: 996px) {
    div {
      button:nth-child(2) {
        display: none;
      }
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border: 0px;
  margin-right: 20px;
  margin-top:10px;
  background-color: #5d39db;
  color: white;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 996px) {
    width: 1000%;
  }
`;

export const Input = styled.div`

`;


export const WordBoxList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 8px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const WordList = styled.div``;

export const WordItem = styled.p`
  display: flex;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  background: white;
  height: 50px;
  margin: 0px;
  margin-top:10px;
  cursor: pointer;
  transition-duration: 0.6;
  &:hover {
    opacity: 0.7;
  }
`;

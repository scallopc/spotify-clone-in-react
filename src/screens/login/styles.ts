import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f1f1f;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 250px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 15px 0px;
  text-align: center;
  background-color: #fefefe;
  border-radius: 50px;
  color: #1f1f1f;
  font-weight: 600;
  margin-top: 20%;
`;

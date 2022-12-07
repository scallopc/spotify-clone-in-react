import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
`;

export const Body = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 20px;
  color: #f8d9c0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px auto;
  transition: all 0.2s ease;
  background-color: rgba(244, 187, 146, 0);

  :hover {
    color: #fff;
  }

  &.active {
    background-color:  rgba(244, 187, 146, 1);
    color: #fff;
    transform: scale(1.05);
  }
`;

export const Title = styled.p`
  margin: 4px auto;
  font-weight: 600;
  font-size: 14px;
`;

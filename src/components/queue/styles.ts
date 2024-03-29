import styled from "styled-components";

export const QueueContainer = styled.div`
  width: 100%;
  height: 35%;
  border-radius: 30px;
  border-top-right-radius: 0px;
  background-color: #3e61d2;
  opacity: 1;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #3e61d2 40px
    ),
    repeating-linear-gradient(#4767d055, #4767d0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Queue = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
`;

export const UpNext = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  text-align: left;
  margin: 10px 0px;
`;

export const QueueList = styled.div`
  height: 80%;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const QueueItem = styled.div`
  justify-content: space-between;
  width: 100%;
  padding: 5px 0px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.95);
  }

  p {
    margin: 0px;

    &.track-name {
      width: 75%;
      text-overflow: ellipsis;
    }
  }
`;

import styled from "styled-components";

export const LibraryContainer = styled.div`
  width: 94%;
  height: 90%;
  padding: 3%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-between;
`;

export const PlaylistImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 15px;
`;

export const PlaylistTitle = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: #c4d0e3;
  margin: 10px 0px 10px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PlaylistSubtitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0px;
  color: #c4d0e37c;
`;

export const PlaylistFade = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 84%;
  height: 34%;
  border-radius: 20px;
  background: linear-gradient(
    180deg,
    rgba(54, 69, 98, 0) 10%,
    rgba(54, 69, 98, 1) 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8%;
  transition: 0.5s ease;
`;

export const PlaylistCard = styled.div`
  position: relative;
  width: 15%;
  height: 35%;
  border-radius: 20px;
  background-color: rgb(30, 42, 62);
  border: 1px solid rgba(54, 69, 98, 0.18);
  padding: 1%;
  margin-bottom: 2%;
  background: rgb(30, 42, 62);
  background: linear-gradient(
    75deg,
    rgb(40, 58, 88) 0%,
    rgba(54, 69, 98, 0) 100%
  );
  transition: all 0.2s ease;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
    ${PlaylistFade} {
      opacity: 1;
    }
  }
`;

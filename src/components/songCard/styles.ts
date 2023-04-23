import styled from "styled-components";

export const SongCardContainer = styled.div`
  width: 100%;
  height: 62%;
  background-color: #27354d;
  border-radius: 30px;
  border-bottom-right-radius: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//albumImage
export const AlbumImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  z-index: 1;
`;

export const AlbumImageShadow = styled.div`
  -webkit-filter: blur(10px);
  filter: blur(10px);
  width: 90%;
  position: absolute;
  z-index: -1;
  top: 20px;
`;

export const Image = styled.img`
  border-radius: 30px;
  width: 100%;
  aspect-ratio: 1;
  ${AlbumImageShadow}
`;

export const AlbumInfoCardContainer = styled.div`
  margin-top: 20px;
  width: 80%;

  p {
    margin: 5px auto !important;
  }
`;

export const AlbumNameContainer = styled.div`
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  font-weight: 700;
  color: #c3d0e3;
`;

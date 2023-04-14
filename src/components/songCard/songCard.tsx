import React from "react";
import { SongCardContainer } from "./styles";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";

export default function SongCard({ album }: any) {
  return (
    <SongCardContainer>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </SongCardContainer>
  );
}

import React from "react";
import { AlbumImageContainer, AlbumImageShadow, Image } from "./styles";

export default function AlbumImage({ url }: any) {
  return (
    <AlbumImageContainer>
      <Image src={url} alt="album art" />
      <AlbumImageShadow>
        <Image src={url} alt="shadow" />
      </AlbumImageShadow>
    </AlbumImageContainer>
  );
}

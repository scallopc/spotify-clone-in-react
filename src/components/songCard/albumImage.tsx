import React from "react";
import { AlbumImageContainer, AlbumImageShadow, Image } from "./styles";

export default function AlbumImage({ url }: any) {
  return (
    <AlbumImageContainer>
      <Image src={url} alt="album art" className="albumImage-art" />
      <AlbumImageShadow>
        <Image src={url} alt="shadow" className="albumImage-shadow" />
      </AlbumImageShadow>
    </AlbumImageContainer>
  );
}

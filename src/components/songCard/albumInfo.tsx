import React from "react";
import {
  AlbumInfoCardContainer,
  AlbumNameContainer,
  AlbumRelease,
} from "./styles";

export default function AlbumInfo({ album }: any) {
  const artists: any = [];
  album?.artists?.forEach((element: any) => {
    artists.push(element.name);
  });

  return (
    <AlbumInfoCardContainer>
      <AlbumNameContainer>
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
      </AlbumNameContainer>
      <AlbumInfo>
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </AlbumInfo>
      <AlbumRelease>
        <p>Release Date: {album?.release_date}</p>
      </AlbumRelease>
    </AlbumInfoCardContainer>
  );
}

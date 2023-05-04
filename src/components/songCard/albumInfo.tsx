import React from "react";
import {
  AlbumInfoCardContainer,
  AlbumNameContainer,
  AlbumRelease,
  Marquee,
} from "./styles";

export default function AlbumInfo({ album }: any) {
  const artists: any = [];
  album?.artists?.forEach((element: any) => {
    artists.push(element.name);
  });

  return (
    <AlbumInfoCardContainer>
      <div>
        <AlbumNameContainer>
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </AlbumNameContainer>
      </div>
      <div>
        <p>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div>
        <p>Release Date: {album?.release_date}</p>
      </div>
    </AlbumInfoCardContainer>
  );
}

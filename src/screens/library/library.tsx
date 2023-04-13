import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContainer } from "../../shared/styles";
import APIKit from "../../spotify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import {
  LibraryContainer,
  PlaylistCard,
  PlaylistFade,
  PlaylistImage,
  PlaylistSubtitle,
  PlaylistTitle,
} from "./styles";

export default function Library() {
  const [playlists, setPlaylists] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    APIKit.get("me/playlists").then(function (response) {
      console.log(response.data.items);
      setPlaylists(response.data.items);
    });
  }, []);

  const playPlaylist = (id: number) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <ScreenContainer>
      <LibraryContainer>
        {playlists?.map((playlist: any) => (
          <PlaylistCard
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <PlaylistImage src={playlist.images[0].url} alt="Playlist-Art" />
            <PlaylistTitle>{playlist.name}</PlaylistTitle>
            <PlaylistSubtitle>{playlist.tracks.total} Songs</PlaylistSubtitle>
            <PlaylistFade>
              <FontAwesomeIcon
                style={{ fontSize: "50px", color: "#E99D72" }}
                icon={faPlayCircle}
              />
            </PlaylistFade>
          </PlaylistCard>
        ))}
      </LibraryContainer>
    </ScreenContainer>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenContainer } from "../../shared/styles";
import APIKit from "../../spotify";
import "./library.css";

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

  return <ScreenContainer>
    <div className="library-body">
        {playlists?.map((playlist: any) => (
          <div
            className="playlist-card"
            key={playlist.id}
            onClick={() => playPlaylist(playlist.id)}
          >
            <img
              src={playlist.images[0].url}
              className="playlist-image"
              alt="Playlist-Art"
            />
            <p className="playlist-title">{playlist.name}</p>
            <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
            <div className="playlist-fade">
              {/* <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider> */}oi
            </div>
          </div>
        ))}
      </div>
  </ScreenContainer>;
}

import React, { useEffect, useState } from "react";
import { ScreenContainer } from "../../shared/styles";
import { LeftPlayer, RightPlayer } from "./styles";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  // useEffect(() => {
  //   setCurrentTrack(tracks[currentIndex]?.track);
  // }, [currentIndex, tracks]);

  return (
    <ScreenContainer>
      <LeftPlayer></LeftPlayer>
      <RightPlayer></RightPlayer>
    </ScreenContainer>
  );
}

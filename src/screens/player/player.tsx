import React, { useEffect, useState } from "react";
import { ScreenContainer } from "../../shared/styles";
import { LeftPlayer, RightPlayer } from "./styles";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard/songCard";
import Queue from "../../components/queue/queue";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState<any>([]);
  const [currentTrack, setCurrentTrack] = useState<any>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(location.state);
  useEffect(() => {
    if (location.state) {
      console.log(location.state);
      // apiClient
      //   .get("playlists/" + location.state?.id + "/tracks")
      //   .then((res) => {
      //     setTracks(res.data.items);
      //     setCurrentTrack(res.data?.items[0]?.track);
      //   });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
    console.log(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <ScreenContainer>
      <LeftPlayer></LeftPlayer>
      <RightPlayer>
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </RightPlayer>
    </ScreenContainer>
  );
}

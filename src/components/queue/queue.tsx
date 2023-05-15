import React from "react";
import { QueueContainer, UpNext } from "./styles";

export default function Queue({ tracks, setCurrentIndex }: any) {
  return (
    <QueueContainer className="flex">
      <Queue className="flex">
        <UpNext>Up Next</UpNext>
        <div className="queue-list">
          {tracks?.map((track: any, index: any) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </Queue>
    </QueueContainer>
  );
}

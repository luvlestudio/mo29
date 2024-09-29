import { useEffect, useState } from "react";
import styled from "styled-components";

const PLAY_IMAGE = `${process.env.PUBLIC_URL}/imgs/play-music/play.png`;
const PAUSE_IMAGE = `${process.env.PUBLIC_URL}/imgs/play-music/stop.png`;

const PlayButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

function PlayMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    new Audio(`${process.env.PUBLIC_URL}/music/bgm.mp3`)
  );

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Auto-play prevented:", error);
      });
    } else {
      audio.pause();
    }

    // 컴포넌트가 언마운트될 때 오디오를 정리
    return () => {
      audio.pause();
      audio.currentTime = 0; // 오디오 위치 초기화
    };
  }, [isPlaying, audio]);

  return (
    <PlayButton
      id="playButton"
      src={isPlaying ? PAUSE_IMAGE : PLAY_IMAGE}
      alt="Play"
      onClick={() => setIsPlaying(!isPlaying)}
    />
  );
}

export default PlayMusic;

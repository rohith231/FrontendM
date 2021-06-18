import React from "react";

import Button from "@material-ui/core/Button";
import MicIconWhite from "../../../icons/MicIconWhite";
import ProhabitedWhite from "../../../icons/ProhabitedWhite";

import useLocalAudioToggle from "../../../hooks/useLocalAudioToggle/useLocalAudioToggle";
import useVideoContext from "../../../hooks/useVideoContext/useVideoContext";
import micIconWhite from "../../../assets/icon_mic.png";
export default function ToggleAudioButton(props: {
  disabled?: boolean;
  className?: string;
  hideLabel?: boolean;
}) {
  const [isAudioEnabled, toggleAudioEnabled] = useLocalAudioToggle();
  const { localTracks } = useVideoContext();
  const hasAudioTrack = localTracks.some((track) => track.kind === "audio");

  return (
    <Button
      className={props.className}
      onClick={toggleAudioEnabled}
      disabled={!hasAudioTrack || props.disabled}
      startIcon={
        isAudioEnabled ? (
          <MicIconWhite />
        ) : (
          <>
            <MicIconWhite />
            <ProhabitedWhite />
          </>
        )
      }
      data-cy-audio-toggle
    >
      {!props.hideLabel &&
        (!hasAudioTrack ? "No Audio" : isAudioEnabled ? "Mute" : "Unmute")}
    </Button>
  );
}

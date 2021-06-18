import React from "react";
import AvatarIcon from "../../../../icons/AvatarIcon";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import LocalAudioLevelIndicator from "../../../LocalAudioLevelIndicator/LocalAudioLevelIndicator";
import { LocalVideoTrack } from "twilio-video";
import VideoTrack from "../../../VideoTrack/VideoTrack";
import useVideoContext from "../../../../hooks/useVideoContext/useVideoContext";

const useStyles = makeStyles((theme: Theme) => ({
  innerContainer: {
    top: "3rem",
    right: "6rem",
    width: "15rem",
    height: "10rem",
    position: "absolute",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  identityContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  identity: {
    color: "white",
    display: "flex",
    padding: "0.2rem 1rem 0.2rem 0.6rem",
    background: "rgba(177, 175, 175 ,0.5)",
    alignItems: "center",
    margin: "1rem",
    borderRadius: "0.4rem",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "black",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      "& svg": {
        transform: "scale(0.7)",
      },
    },
  },
}));

export default function LocalVideoPreview({ identity }: { identity: string }) {
  const classes = useStyles();
  const { localTracks } = useVideoContext();

  const videoTrack = localTracks.find((track) =>
    track.name.includes("camera")
  ) as LocalVideoTrack;

  return (
    <div>
      <div className={classes.innerContainer}>
        {videoTrack ? (
          <VideoTrack track={videoTrack} isLocal />
        ) : (
          <div className={classes.avatarContainer}>
            <AvatarIcon />
          </div>
        )}

        <div className={classes.identityContainer}>
          <span className={classes.identity}>
            <LocalAudioLevelIndicator />
            <Typography variant="body1" color="inherit" component="span">
              {identity}
            </Typography>
          </span>
        </div>
      </div>
    </div>
  );
}

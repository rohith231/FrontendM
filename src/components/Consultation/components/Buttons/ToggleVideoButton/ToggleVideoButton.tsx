import React, { useCallback, useRef } from "react";

import Button from "@material-ui/core/Button";
import VideoOnIconWhite from "../../../icons/VideoOnIconWhite";
import ProhabitedWhite from "../../../icons/ProhabitedWhite";

import useDevices from "../../../hooks/useDevices/useDevices";
import useLocalVideoToggle from "../../../hooks/useLocalVideoToggle/useLocalVideoToggle";

export default function ToggleVideoButton(props: {
  disabled?: boolean;
  className?: string;
  hideLabel?: boolean;
}) {
  const [isVideoEnabled, toggleVideoEnabled] = useLocalVideoToggle();
  const lastClickTimeRef = useRef(0);
  const { hasVideoInputDevices } = useDevices();

  const toggleVideo = useCallback(() => {
    if (Date.now() - lastClickTimeRef.current > 500) {
      lastClickTimeRef.current = Date.now();
      toggleVideoEnabled();
    }
  }, [toggleVideoEnabled]);

  return (
    <Button
      className={props.className}
      onClick={toggleVideo}
      disabled={!hasVideoInputDevices || props.disabled}
      startIcon={
        isVideoEnabled ? (
          <VideoOnIconWhite />
        ) : (
          <>
            <VideoOnIconWhite />
            <ProhabitedWhite />
          </>
        )
      }
    >
      {!props.hideLabel &&
        (!hasVideoInputDevices
          ? "No Video"
          : isVideoEnabled
          ? "Stop Video"
          : "Start Video")}
      {/* {!hasVideoInputDevices ? 'No Video' : null} */}
    </Button>
  );
}

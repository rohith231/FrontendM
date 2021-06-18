import React from "react";

import Button from "@material-ui/core/Button";
import DisconnectIcon from "../../../icons/DisconnectIcon";

export default function ToggleAudioButton(props: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      className={props.className}
      onClick={props.onClick}
      startIcon={<DisconnectIcon />}
      data-cy-disconnect-toggle
    ></Button>
  );
}

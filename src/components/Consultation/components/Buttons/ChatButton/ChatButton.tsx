import React from "react";

import Button from "@material-ui/core/Button";
import ChatIconWhite from "../../../icons/ChatIconWhite";

export default function ChatButton(props: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      className={props.className}
      onClick={props.onClick}
      startIcon={<ChatIconWhite />}
      data-cy-chat-toggle
    ></Button>
  );
}

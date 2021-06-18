import React from "react";

import Button from "@material-ui/core/Button";
import AddPersonWhite from "../../../icons/AddPersonWhite";

export default function AddPersonButton(props: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <Button
      className={props.className}
      onClick={props.onClick}
      startIcon={<AddPersonWhite />}
      data-cy-add-person-toggle
    ></Button>
  );
}

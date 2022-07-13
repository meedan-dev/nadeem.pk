import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export const MeaningTooltip = ({
  name,
  meaning,
}: {
  name: string;
  meaning: string;
}): JSX.Element => (
  <Tooltip title={meaning}>
    <Button>{name}</Button>
  </Tooltip>
);

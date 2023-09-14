import React from "react";
import { StyledIcon } from "./styles/icons.styled";
import { Icon as IconifyIcon } from "@iconify/react";

export default function CustomIcon({ icon, className }) {
  return (
    <StyledIcon className={className}>
      <IconifyIcon icon={icon} />
    </StyledIcon>
  );
}
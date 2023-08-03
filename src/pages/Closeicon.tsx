import React, { ReactElement } from "react";

interface CloseIconProps {
  height?: number;
  width?: number;
  color?: string;
  onClick?: () => void;
}

export default function CloseIcon({
  height = 48,
  width = 48,
  color = "#fff",
  onClick,
}: CloseIconProps): ReactElement {
  return (
    <svg
      onClick={onClick}
      style={{
        cursor: "pointer",
        fill: color,
      }}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
    >
      <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  );
}

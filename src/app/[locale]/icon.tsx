// File: dev-console/src/app/[locale]/icon.tsx

/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const profileImage = "https://github.com/phpohlmann.png";

  return new ImageResponse(
    <div
      style={{
        background: "#050505",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "6px", // Tiny border radius as requested
        overflow: "hidden",
      }}
    >
      <img
        src={profileImage}
        alt="Pedro Pohlmann"
        width="32"
        height="32"
        style={{
          objectFit: "cover",
          borderRadius: "4px", // Matches container aesthetic
        }}
      />
    </div>,
    {
      ...size,
    },
  );
}

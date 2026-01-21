import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pedro Pohlmann | Engineering Console";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const isPt = locale === "pt";
  const title = isPt ? "Console de Engenharia" : "Engineering Console";
  const subtitle = "Pedro Pohlmann // 2026.1.0-stable";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050505",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.2,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          display: "flex",
          gap: 8,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
          }}
        />
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#27c93f",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
          }}
        >
          <div
            style={{
              width: 40,
              height: 4,
              backgroundColor: "#3b82f6",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: "#3b82f6",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
          >
            System Active
          </span>
          <div
            style={{
              width: 40,
              height: 4,
              backgroundColor: "#3b82f6",
              borderRadius: 2,
            }}
          />
        </div>

        <h1
          style={{
            fontSize: 90,
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            margin: 0,
            letterSpacing: "-0.05em",
            textTransform: "uppercase",
          }}
        >
          Pedro Pohlmann
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            backgroundColor: "rgba(255,255,255,0.03)",
            padding: "12px 24px",
            borderRadius: 100,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 500,
            }}
          >
            {title}
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}

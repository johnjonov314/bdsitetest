import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Beeline Big Data & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #0d0b06 0%, #18110a 45%, #2b1740 100%)",
          color: "#fff"
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#FFE45E" }}>Beeline Enterprise Platform</div>
        <div style={{ marginTop: 20, fontSize: 74, lineHeight: 1.05, fontWeight: 700 }}>BigData & AI</div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#E8E6E0" }}>Платформа данных, AI и цифровых сотрудников</div>
      </div>
    ),
    { ...size }
  );
}

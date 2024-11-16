import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const data = searchParams.get("d");

  if (!data) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(to bottom, #0f172a, #1e293b)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <h1 style={{ color: "white", fontSize: 60 }}>
            Calculadora CLT vs. PJ
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }

  // Calculate results and generate image with comparison
  // ... implementation details
}

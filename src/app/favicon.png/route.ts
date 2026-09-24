import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createElement } from "react";
import { ImageResponse } from "next/og";

const ravenImage = readFile(join(process.cwd(), "public/brand/bhutan-beckons-raven.png"));

export const dynamic = "force-static";

export async function GET() {
  const raven = await ravenImage;
  const ravenSource = `data:image/png;base64,${raven.toString("base64")}`;

  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          alignItems: "center",
          background: "#E7E4DA",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        },
      },
      createElement("img", {
        alt: "",
        height: 368,
        src: ravenSource,
        style: { objectFit: "contain" },
        width: 410,
      }),
    ),
    {
      height: 512,
      width: 512,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}

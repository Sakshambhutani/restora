import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Restora | Software for Restoration & Custom Shops";
const description =
  "Building software around the realities of long-running restoration and custom projects: changing scope, technician work, parts, approvals, billing and project economics.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    icons: { icon: "/Restora.png", shortcut: "/Restora.png", apple: "/Restora.png" },
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: `${origin}/Restora.png`, alt: "Restora — software for restoration and custom shops" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/Restora.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

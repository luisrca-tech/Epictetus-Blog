import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Epictetus",
  description:
    "Epictetus is a versatile and user-friendly blog platform built with Sanity, enabling you to create engaging and informative content. With Epictetus, you can easily manage and publish posts, search for relevant content and actors, and a powerful image management system. Additionally, you can schedule posts for future publication, ensuring your content remains fresh and relevant.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

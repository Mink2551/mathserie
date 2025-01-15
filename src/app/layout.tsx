import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "My App",
  description: "This is a test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable}>
      <body>{children}</body>
    </html>
  );
}

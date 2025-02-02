import FlyonuiScript from "@/components/FlyouiScript";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "AnyTech",
  description: "Your tech partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <div className="">{children}</div>
        <FlyonuiScript />
      </body>
    </html>
  );
}

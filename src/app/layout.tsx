import { ThemeProvider } from "@/themes/providers/ThemeProvider";
import { RainbowKitWeb3Provider } from "@components/web3";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider defaultTheme="system">
          <RainbowKitWeb3Provider projectId={process?.env?.NEXT_PUBLIC_WALLET_CONNECT_ID || "123123123123123123"}>{children}</RainbowKitWeb3Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}

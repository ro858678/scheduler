import { AuthProvider } from "./Providers";
import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import "./globals.css";


const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <AuthProvider> {children}</AuthProvider>       
        
        </body>
    </html>
  );
}

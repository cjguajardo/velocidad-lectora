import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Page from "@/components/other/page";

const inter = Inter( { subsets: ["latin"] } );

export const metadata: Metadata = {
  title: "Velocidad Lectora",
  description: "App web para calcular la velocidad lectora utilizando la IA.",
};

export default function RootLayout( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> ) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <Page>
          {children}
        </Page>
      </body>
    </html>
  );
}

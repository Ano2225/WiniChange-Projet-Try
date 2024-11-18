import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientLayout from './ClientLayout';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800', '900'] });

export const metadata: Metadata = {
  title: "WiniChange - Official Website",
  description: "Winichange est une plateforme d'interconnexion qui favorise l'interopérabilité des solutions de transfert d'argent en reliant les cryptomonnaies aux services de transfert mobile et bancaire en Afrique et dans le monde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="relative">
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
        <Script 
          src="//code.jivosite.com/widget/x4enTeldRF"
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}

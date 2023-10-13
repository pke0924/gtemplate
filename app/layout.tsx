import { LayoutProvider } from "@/provider/context/layoutcontext";
import PrimeReactProvider from "@/provider/context/primeprovider";
import { Metadata } from "next";

import "@/styles/tailwind.css";

import "@/styles/layout/layout.scss";
import "@/styles/lightbluegrey.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

export const metadata: Metadata = {
  title: "Gbook Ultima",
  description: "The ultimate archives for risk management ",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: "device-width" },
  openGraph: {
    type: "website",
    title: "Gbook with prime",
    url: "https://www.primefaces.org/ultima-react",
    description: "The archives for risk management.",
    images: ["https://www.primefaces.org/static/social/ultima-react.png"],
    ttl: 604800,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      {/* <body className="tw-overflow-scroll"> */}
      <body>
        <PrimeReactProvider>
          <LayoutProvider>
            {/* <div>{children}</div> */}
            {children}
            {/* <div className="containerClassName">{children}</div> */}
          </LayoutProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}

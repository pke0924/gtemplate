import React, { Suspense } from "react";
import { Metadata } from "next";

import Layout from "@/provider/layoutprovider";

import "katex/dist/katex.min.css";
function SearchBarFallback() {
  return <>placeholder</>;
}

// interface MainLayoutProps {
//   children: React.ReactNode;
// }

// export default function MainLayout({ children }: MainLayoutProps) {
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<SearchBarFallback />}>
      <Layout>{children}</Layout>
    </Suspense>
  );
  {
    /* return <> {children} </>; */
  }
}

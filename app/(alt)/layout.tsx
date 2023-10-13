// "use client";
// import { usePathname, useSearchParams } from "next/navigation";
// import { PrimeReactContext } from "primereact/api";
// import {
//   useEventListener,
//   useMountEffect,
//   useResizeListener,
//   useUnmountEffect,
// } from "primereact/hooks";
// import { classNames, DomHandler } from "primereact/utils";
// import React, { useCallback, useContext, useEffect, useRef } from "react";

// import AppConfig from "@/components/layout/AppConfig";
// import AppRightMenu from "@/components/layout/AppRightMenu";
// import AppSidebar from "@/components/layout/AppSidebar";
// import AppTopbar from "@/components/altlay/AppTopbar";
// import { LayoutContext } from "@/provider/context/layoutcontext";
// import AppBreadcrumb from "@/components/layout/AppBreadCrumb";
// import AppFooter from "@/components/layout/AppFooter";
import type { AppTopbarRef, ChildContainerProps } from "@/types/types";
import { Metadata } from "next";

import "@/styles/tailwind.css";

import "@/styles/layout/layout.scss";
import "@/styles/lightbluegrey.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

export const metadata: Metadata = {
  title: "Gbook Ultima",
  description: "The ultimate archives for risk management.",
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
    icon: "/faviconG.ico",
  },
};

const AltLayout = (props: ChildContainerProps) => {
  return <>{props.children}</>;
};

export default AltLayout;

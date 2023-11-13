"use client";
import { format, parseISO } from "date-fns";
import { FC, ReactNode } from "react";
import { getMDXComponent } from "next-contentlayer/hooks";
// import type { MDXContentProps } from "next-contentlaye/type";
// import type { MDXComponents } from "mdx/types";

// import { Accordion, AccordionTab, Card } from "@/components/primecomp";

import { Accordion, AccordionTab } from "primereact/accordion";
import { Card, CardProps } from "primereact/card";
import { OverlayPanel } from "primereact/overlaypanel";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Messages } from "primereact/messages";
import { Fieldset } from "primereact/fieldset";
// import { PrimeIcons } from "primereact/api";
import { Image, ImageProps } from "primereact/image";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";
import { ScrollTop } from "primereact/scrolltop";
import GHint from "@/components/ghint";
import OverlayDemo from "@/components/overlayDemo";
// import OverlayDemoBasel from "@/components/overlayDemoBasel";
// import TermBasel from "@/components/termBasel";
import { GChip, GChecklist, GTooltipLink } from "@/components/refcomp";

import {
  GCallout,
  GCallout2,
  // GHint,
  GMessage,
  G2Col,
  GSheet,
  GMath,
  GCard,
  GCenterImg,
  GComment,
  Gh1,
  Gh2,
  Gh3,
  Gh4,
  GListItem,
  GTooltip,
  GTooltipIcon,
} from "@/components/prime";

const usedcomponents = {
  h1: Gh1,
  h2: Gh2,
  h3: Gh3,
  h4: Gh3,
  h5: Gh4,
  h6: Gh4,
  li: GListItem,
  GListItem,
  Accordion,
  AccordionTab,
  TabView,
  TabPanel,
  Card,
  Panel,
  OverlayPanel,
  OverlayDemo,
  // OverlayDemoBasel,
  // TermBasel,
  // OverlayDemo: GTooltipLink,
  DataTable,
  Column,
  Fieldset,
  GCallout,
  GCallout2,
  Callout: GCallout,
  GHint,
  Messages,
  M1: GMessage,
  GMessage,
  G2Col,
  GSheet,
  Math: GMath,
  GMath,
  Image,
  GCenterImg,
  CenterImg: GCenterImg,
  Chip: GChip,
  GChip,
  GComment,
  Cmt: GComment,
  SCard: GCard,
  Cl: GChecklist,
  GTooltip,
  GTooltipIcon,
  // GToast,
  ScrollTop,
};

// const MDXContent = getMDXComponent(doc);
// // const MDXContent = useMDXComponent(zzz);
// type MDXContentProps = {
//   [props: string]: unknown;
//   components?: MDXComponents;
// };

const GMDX = ({ code }: { code: string }): React.ReactNode => {
  const MDXContent = getMDXComponent(code);
  return (
    <div>
      <MDXContent components={usedcomponents} />
      <ScrollTop />
    </div>
  );
};

export default GMDX;
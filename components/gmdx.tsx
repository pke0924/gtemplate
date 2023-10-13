"use client";
import { format, parseISO } from "date-fns";
import { FC, ReactNode } from "react";
import { getMDXComponent } from "next-contentlayer/hooks";
// import type { MDXContentProps } from "next-contentlaye/type";
// import type { MDXComponents } from "mdx/types";

// import { Accordion, AccordionTab, Card } from "@/components/primecomp";

import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Card, CardProps } from "primereact/card";
// import { Dialog } from "primereact/dialog";
import { OverlayPanel } from "primereact/overlaypanel";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Message } from "primereact/message";
// import { PrimeIcons } from "primereact/api";
import { Image, ImageProps } from "primereact/image";
import { Chip } from "primereact/chip";
// import { ChipsProps } from "primereact/chips";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";

// import AppRightbar from "@/components/layout/AppRightbar";
// import ContentLayout from "@/layout/ContentLayout";
// import Layout from "@/layout/layout";
// import AppRightbar from "@/layout/AppRightbar";
// import type { MDXProps } from "mdx/types";

import OverlayDemo from "@/components/overlayDemo";
import { GChip, GChecklist, GTooltipLink } from "@/components/refcomp";

import {
  GSubText,
  GCallout,
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
  GListItem,
  GTooltip,
  GTooltipIcon,
} from "@/components/prime";

const usedcomponents = {
  h1: Gh1,
  h2: Gh2,
  h3: Gh2,
  h4: Gh3,
  h5: Gh3,
  h6: Gh3,
  li: GListItem,
  GListItem,
  Accordion,
  AccordionTab,
  SubText: GSubText,
  TabView,
  TabPanel,
  Card,
  Panel,
  OverlayPanel,
  OverlayDemo,
  // OverlayDemo: GTooltipLink,
  DataTable,
  Column,
  Fieldset,
  GCallout,
  Callout: GCallout,
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
};

// const MDXContent = getMDXComponent(doc);
// // const MDXContent = useMDXComponent(zzz);
// type MDXContentProps = {
//   [props: string]: unknown;
//   components?: MDXComponents;
// };

const GMDX = ({ code }: { code: string }): React.ReactNode => {
  const MDXContent = getMDXComponent(code);
  return <MDXContent components={usedcomponents} />;
};

export default GMDX;

"use client";
import React, { Children, useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
// import { Accordion, AccordionTab, Card } from "./primecomp";
import { Accordion, AccordionTab } from "primereact/accordion";
// import { Card } from "primereact/card";
import { Card, CardProps } from "primereact/card";
// import { ChipsProps } from "primereact/chips";
// import { Dialog } from "primereact/dialog";
import { OverlayPanel } from "primereact/overlaypanel";
import { TabView, TabPanel } from "primereact/tabview";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Message } from "primereact/message";
// import { Messages } from "primereact/messages";
// import { PrimeIcons } from "primereact/api";
// import { Image, ImageProps } from "primereact/image";
import Image from "next/image";
import { Chip } from "primereact/chip";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";

import { Kics, Ifrs, Fs, Post, Basel, Fm, Bm } from "@/.contentlayer/generated";
// import { string } from "prop-types";

// import checklist from "@/public/data/check.json";

// const H2({ children }: { children?: React.ReactNode }) {
//   return (
//     <h4 className="mdx-h1" id={children?.toString.split(" ").join("-")}>
//       {children}
//     </h4>
//   );
// }

// interface InputWrapperProps {
//   id?: string;
//   children?: React.ReactNode;
// }

const Gh1 = ({ children }: { children?: ReactNode }) => {
  // const GofH1 = ({ props }: { props: InputWrapperProps }) => {
  //   const { id, children } = props;
  // console.log("zzzzz");
  // console.log(children);
  // const bbb = children.type == string ? children?.toString : "aa";
  // console.log(id.split(" ").join("-").replace(".", "").toUpperCase());
  // const achor = id.split(" ").join("-").replace(".", "").toUpperCase();
  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;

  console.log("zzzzz1");
  // console.log(id);
  // console.log(children);
  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;
  // console.log(anchorList);
  // const achor = anchorList.replace("]", "").toUpperCase();

  // const idArray = id.split("-");

  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;
  // const anchor = idArray[idArray.length - 1].toLowerCase();

  const titleList = children ? children.toString().split("[#") : [];
  const title = titleList ? titleList[0].trim() : "";

  // const anchor = title.split(" ").join("-").toUpperCase();
  const anchor =
    titleList.length > 1
      ? titleList[1].replace("]", "").toLowerCase()
      : title.split(" ").join("-").toUpperCase();

  return (
    <h4 className="!tw-mt-8 !tw-leading-10" id={anchor}>
      {title}
    </h4>
  );
};

const Gh2 = ({ children }: { children?: ReactNode }) => {
  // const GofH2 = ({ props }: { props: InputWrapperProps }) => {
  //   const { id, children } = props;
  // const achor = id.split(" ").join("-").replace(".", "").toUpperCase();

  // console.log("zzzzz2");
  // console.log(id);
  // console.log(children);
  // const idArray = id.split("-");
  // console.log("anchor");
  // console.log(idArray);
  // const anchorList = id.split("[").length > 1 ? id.split("[")[1] : id;
  // const anchor = idArray[idArray.length - 1].toUpperCase();
  // console.log(anchor);
  // const achor = anchorList.replace("]", "").toUpperCase();

  const titleList = children ? children.toString().split("[#") : [];
  const title = titleList ? titleList[0].trim() : "";

  // const anchor = title.split(" ").join("-").toUpperCase();
  const anchor =
    titleList.length > 1
      ? titleList[1].replace("]", "").toLowerCase()
      : title.split(" ").join("-").toUpperCase();
  // console.log("title");
  // console.log(title);

  return (
    <h4 className="!tw-mt-8 !tw-leading-10" id={anchor}>
      {title}
    </h4>
  );
};

const Gh3 = ({ children }: { children?: ReactNode }) => {

  const titleList = children ? children.toString().split("[#") : [];
  const title = titleList ? titleList[0].trim() : "";

  const anchor =
    titleList.length > 1
      ? titleList[1].replace("]", "").toLowerCase()
      : title.split(" ").join("-").toUpperCase();

  return (
    <h5 className="!tw-mt-8 !tw-leading-5" id={anchor}>
      {title}
    </h5>
  );
};

const Gh4 = ({ children }: { children?: ReactNode }) => {

  const titleList = children ? children.toString().split("[#") : [];
  const title = titleList ? titleList[0].trim() : "";

  const anchor =
    titleList.length > 1
      ? titleList[1].replace("]", "").toLowerCase()
      : title.split(" ").join("-").toUpperCase();

  return (
    <h6 className="!tw-mt-8 !tw-leading-5" id={anchor}>
      {title}
    </h6>
  );
};

// const GofListItem = (props) => {
//   console.log("bbbb");
//   console.log(props);
//   return (
//     <li
//       className="tw-list-none tw-pl-8 -tw-indent-6 !tw-leading-10"
//       id={props.name}
//     >
//       {/* <li className="tw-list-none list-inside tw-pl-8  -tw-indent-6 !tw-leading-10"> */}
//       {props.children}
//     </li>
//   );
// };

const GNavigation = ({
  prev,
  next,
}: {
  prev?: Kics | Ifrs | Post | Fs | Basel |Fm | Bm;
  next?: Kics | Ifrs | Post | Fs | Basel |Fm | Bm;
}) => {
  const prevUrl = prev ? prev.url : "#";
  const nextUrl = next ? next.url : "#";

  return (
    <div className="md:tw-flex md:tw-justify-between md:tw-justify-items-stretch md:tw-gap-2 tw-mt-6">
      <div className="md:tw-basis-1/2 md:tw-flex-auto tw-mt-1">
        <Link
          href={prevUrl}
          className={classNames({ "tw-hidden": prev === null })}
        >
          <Button
            className="w-full !tw-text-lg !tw-font-bold !tw-py-5 "
            label={prev?.title}
            outlined
            size="large"
            icon="pi pi-angle-left"
          ></Button>
        </Link>
      </div>
      <div className="md:tw-basis-1/2 md:tw-flex-auto tw-mt-1">
        <Link
          href={nextUrl}
          className={classNames({ "tw-hidden": next === null })}
        >
          <Button
            className="w-full !tw-text-lg !tw-font-bold !tw-py-5 "
            label={next?.title}
            outlined
            size="large"
            icon="pi pi-angle-right"
            iconPos="right"
          ></Button>
        </Link>
      </div>
    </div>
  );
};

const GNavigation2 = ({
  label,
  url,
  next,
}: {
  label: string;
  url: string;
  next?: boolean;
}) => {
  return next ? (
    <div className="md:tw-basis-1/2 md:tw-flex-auto tw-mt-1">
      <Link href={url}>
        <Button
          className="w-full"
          label={label}
          outlined
          size="large"
          icon="pi pi-angle-right"
          iconPos="right"
        ></Button>
      </Link>
    </div>
  ) : (
    <div className="md:tw-basis-1/2 md:tw-flex-auto tw-mt-1">
      <Link href={url}>
        <Button
          className="w-full"
          label={label}
          outlined
          size="large"
          icon="pi pi-angle-left"
        ></Button>
      </Link>
    </div>
  );
};

const GNavigation1 = ({
  label,
  url,
  next,
}: {
  label: string;
  url: string;
  next?: boolean;
}) => {
  return next ? (
    <div className="tw-basis-1/2 tw-flex-auto">
      <a href={url}>
        <Button
          className="w-full"
          label={label}
          outlined
          size="large"
          icon="pi pi-angle-right"
          iconPos="right"
        ></Button>
      </a>
    </div>
  ) : (
    <div className="tw-basis-1/2 tw-flex-auto">
      <a href={url}>
        <Button
          className="w-full"
          label={label}
          outlined
          size="large"
          icon="pi pi-angle-left"
        ></Button>
      </a>
    </div>
  );
};

const GListItem = ({ children }: { children?: React.ReactNode }) => {
  return (
    <li className="tw-list-none tw-pl-4 -tw-indent-4 tw-py-1 md:tw-pl-8">
      {/* <li className="tw-list-none list-inside tw-pl-8  -tw-indent-6 !tw-leading-10 tw-subpixel-antialiased !tw-leading-relaxed"> */}
      {children}
    </li>
  );
};

const GCollapse = ({
  header,
  open,
  children,
}: {
  header: string;
  open?: boolean;
  children: ReactNode;
}) => {
  const openIndex = open ? 0 : 1;
  // console.log("gggggggggggggggggggggggggggggggg" + open + ":" + openIndex);
  return (
    <Accordion activeIndex={openIndex}>
      <AccordionTab header={header}>{children}</AccordionTab>
    </Accordion>
  );
};

const GAccordion = ({
  activeIndex,
  multiple,
  children,
}: {
  multiple?: boolean;
  activeIndex?: number | number[] | null | undefined;
  children: ReactNode;
}) => {
  console.log("kkk : " + activeIndex);
  // console.log("kkk 1: " + children.toString());
  // const index = openIndex ? openIndex : -1;
  return (
    <Accordion multiple activeIndex={activeIndex}>
      {children}
    </Accordion>
  );
};

const GAccordionTab = ({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) => {
  console.log("hhhhhhhhhhhhhhhhhhhhh" + header);
  return (
    <AccordionTab header={header}>
      <div>{children}</div>
    </AccordionTab>
  );
};

const GSheet = ({
  height,
  title,
  children,
}: {
  height: string;
  title: string;
  children: ReactNode;
}) => {
  // const { height = "min-h-screen", title } = props;

  // const children = props.children;
  return (
    <Card className={height} title={title}>
      {children}
    </Card>
  );
};

const G2Col = ({ children }: { children: ReactNode[] }) => {
  // const children = props.children;
  // const child1 = children.
  return (
    <div className="grid /*tw-border-t tw-border-b*/ !tw-m-1" >
      <div className="col-12 md:col-6">{children[0]}</div>
      <div className="col-12 md:col-6">{children[1]}</div>
    </div>
  );
};

// const M2 = function TemplateDemo({prop, children}) {
const GMessage = ({
  severity = "info",
  width = "100%",
  borderWidth = "0 0 0 6px",
  icon = "pi pi-cog",
  text,
}: {
  severity: "success" | "info" | "warn" | "error" | undefined;
  width: string;
  borderWidth: string;
  icon: string;
  text: string;
}) => {
  const content = (
    <div>
      {text}
    </div>
  );
  return (
    <Message
      style={{
        borderWidth: borderWidth,
        display: "block",
        width: width,
      }}
      severity={severity}
      content={text}
    ></Message>
  );
};

// 기존 Callout에 제목을 추가함.
const GCallout2 = ({
  severity,
  width,
  borderWidth,
  children,
}: {
  severity?: "success" | "info" | "warn" | "error" | undefined;
  width?: string;
  borderWidth?: string;
  children: ReactNode;
}) => {
  const _severity = severity ? severity : "info";
  const _width = width ? width : "100%";
  const _borderWidth = borderWidth ? borderWidth : "0 0 0 6px";

  const content = <div style={{ width: "100%" }}>{children}</div>;

  return (
    <Message
      style={{
        borderWidth: _borderWidth,
        justifyContent: "left",
        width: _width,
        // height: height,
        alignItems: "start",
      }}
      // className="border-primary w-full justify-content-start"
      severity={_severity}
      // icon= { PrimeIcons.PLUS}
      content={content}
    ></Message>
  );
};

// interface GHintProps {
//   severity?: "success" | "info" | "warn" | "error";
//   summary?: string;
//   children: React.ReactNode;
// }

// const GHint: React.FC<GHintProps> = ({
//   severity = "info",
//   summary = "",
//   children,
// }: GHintProps) => {
//   const msgs = useRef<Messages | null>(null);

//   useEffect(() => {
//     const messageOptions = {
//       sticky: true,
//       severity: severity,
//       summary: summary,
//       detail: children,
//       icon: false,
//       closable: false 
      
//     };

//     msgs.current?.show(messageOptions);
//   }, [severity, summary, children]);

//   return (
//     <Messages ref={msgs} />
//   );
// };

const GCallout = ({
  title,
  width = "100%",
  severity,
  children,
}: {
    title: string;
    severity?: "success" | "info" | "warn" | "error" | undefined;
    width?: string;
    children: ReactNode;
}) => {
  const _title = title ? "❱❱ " + title + " " : "";
  const _severity = severity ? severity : "info";
  const _width = width ? width : "100%";

  return (
    <div className="tw-my-5">
    <Message
      style={{
        justifyContent: "left",
        alignItems: "start",
        padding: "1rem",
        width: _width,
      }}
      severity={_severity}
      content={
        <div style={{ width: "100%",  textAlign: "left"}}>
        {title && (
          <div style={{fontWeight: "700", marginBottom:"0.7rem", fontSize:"1.03rem" , fontFamily:"NotoSansKR" /*fontStyle :"italic" , textDecoration: "underline" , textDecorationThickness: "0.2px"*/ }}>
            {_title}
          </div>
        )}
        {children && (
          <div style={{ width: "100%"}}>{children}</div>
        )}
      </div>
      }
    ></Message>
    </div>
  );
};

const GMath = ({
  title,
  fontSize = "1.0rem",
  width = "100%",
  borderWidth = "0 0 0 6px",
  children,
}: {
    title: string;
    fontSize?: string;
    width?: string;
    borderWidth?: string;
    children: ReactNode;
}) => {
  const _title = title ? title : "";
  const _fontSize = fontSize ? fontSize : "1.0rem";
  const _width = width ? width : "100%";
  const _borderWidth = borderWidth ? borderWidth : "0 0 0 6px";

  return (
    <div className="tw-my-2">
      <Message
        style={{
          borderWidth: _borderWidth,
          width: _width,
          fontSize: _fontSize,
          padding: "10px",
        }}
        severity={"success"} 
        content={
          <div style={{ width: "100%",  textAlign: "left"}}>
          {title && (
            <div style={{fontWeight: "500", fontFamily: "NotoSansKR" }}>
              {_title}
            </div>
          )}
          {children && (
            <div style={{ width: "100%", textAlign: "center" }}>{children}</div>
          )}
        </div>
        }
      ></Message>
    </div>
  );
};

// comment
const GComment = ({
  // pl,
  props,
  children,
}: {
  // fontSize: string;
  pl: number;
  props: any;
  children: ReactNode;
}) => {
  // const { fontSize = "0.9rem" } = props;

  const divStyle = {
    fontSize: "0.875rem",
    border: "none", // 테두리 없음
    // padding: "0",
    fontWeight: "400",
    color: "var(--surface-700)",
    letterSpacing: "-0.04em"
  };

  const contentStyle = {
      // borderTop: "0.7px double #bbc7cd",
      paddingTop : "0.3rem",
      marginTop : "0.5rem",
      marginLeft : "1rem",
      background: `linear-gradient(to right, #bbc7cd 50%, transparent 50%)`,
      backgroundSize: "100% 1px", 
      backgroundRepeat: "no-repeat",
  };

  return (
    <div {...props} style={divStyle}>
      <div style={contentStyle} className="tw-pb-2 ... ">
        {children}
      </div>
    </div>
  );
};

const GCard = ({
  title,
  ...rest
}: {
  title: string;
} & React.ComponentPropsWithoutRef<typeof Card>) => {
  return <Card title={title} {...rest} />;
};
// default style 지정 이미지 : 가운데 정렬, 최대 사이즈 고정

const GCenterImg = ({
  caption,
  children,
  width = "600",
  height = "400",
  ...rest
}: {
  caption: string;
  width: string;
  height: string;
  // children : React.ReactNode;
  // imageStyle: { display: string; margin: string };
} & React.ComponentPropsWithoutRef<typeof Image>) => {
  // const imageStyle = { display: "block", margin: "0 auto" };
  const alt = caption;
  return (
    <div style={{ textAlign: "center" }}>
      {/* <Image src={props.src} width={width1} style={imageStyle} /> */}
      <Image
        width={width}
        height={height}
        className="tw-mx-auto tw-block tw-my-2"
        // style={imageStyle}
        {...rest}
        alt={alt} // alt 속성을 caption 값으로 설정
      />
      {caption && <p className="tw-pb-4 tw-text-gray-500 tw-text-base" >&lt;{caption}&gt;</p>}
    </div>
  );
};

const GChip = ({ id }: { id: number }) => {
  const icon = "pi pi-question-circle";
  const removable = true;

  // const selectedItem = checklist.find((s) => s.id == id);
  const selectedItem = {};

  return (
    <Chip
      // label={selectedItem ? selectedItem.desc : "aaa"}
      icon={icon}
      removable={removable}
    />
  );
};

const GChecklist = ({
  children,
  icon = "pi pi-question-circle",
  removable = true,
}: {
  children: ReactNode;
  icon: string;
  removable: boolean;
}) => {
  // const selectedItem = checklist.find((s) => s.id == children);
  const selectedItem = "aaa";
  // console.log("selected ");
  // console.log(children);
  return (
    <Chip
      // label={selectedItem ? selectedItem.desc : "bb"}
      label={selectedItem}
      icon={icon}
      removable={removable}
    />
  );
};

const GTooltip = ({ label, desc }: { label: string; desc: string }) => {
  return (
    <>
      <Tooltip target=".tooltip-target" style={{ width: "400px" }} />
      <Button
        severity="warning"
        link
        label={label}
        className="tooltip-target !tw-py-0 !tw-px-1 tw-italic  tw-text-current tw-underline"
        data-pr-tooltip={desc}
        data-pr-position="bottom"
        data-pr-at="left bottom+2"
        data-pr-my="left top"
      />
    </>
  );
};

const GTooltipIcon = ({
  desc,
  icon = "pi pi-question-circle",
  severity = "info",//  secondary
}: {
  desc: string;
  icon: string;
  severity: "success" | "info" | "warning" | "secondary" | "danger";
}) => {
  return (
    <>
      <Tooltip target=".tooltip-target"/>
      <Button
        icon={icon}
        text
        rounded
        severity={severity}
        className="tooltip-target !tw-py-0 !tw-px-0 !tw-align-baseline !tw-w-6"
        data-pr-tooltip={desc}
        data-pr-position="bottom"
        data-pr-at="left bottom+4"
        data-pr-my="left top"
      />
    </>
  );
};

// const GToast = ({ desc }: { desc: string }) => {
//   const toast = useRef(null);
//   const showSticky = () => {
//     // toast.current?.show({
//     //   severity: "info",
//     //   summary: "Sticky",
//     //   detail: { desc },
//     //   sticky: true,
//     // });
//   };

//   return (
//     <div>
//       <Toast ref={toast} />
//       <Button onClick={showSticky} label="Sticky" />
//     </div>
//   );
// };

export {
  Button,
  GAccordion,
  GAccordionTab,
  GCallout,
  GCallout2,
  // GHint,
  GMessage,
  G2Col,
  GSheet,
  GMath,
  GCenterImg,
  Gh1,
  Gh2,
  Gh3,
  Gh4,
  GListItem,
  GChip,
  GChecklist,
  GTooltip,
  GTooltipIcon,
  // GToast,
  GCollapse,
  GCard,
  GComment,
  GNavigation1,
  GNavigation2,
  GNavigation,
};

"use client";
import React, { Children, useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import "./theme.module.scss";
// import '../styles/goftheme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeflex/primeflex.css';
// import 'primeicons/primeicons.css';
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
// import { PrimeIcons } from "primereact/api";
// import { Image, ImageProps } from "primereact/image";
import Image from "next/image";
import { Chip } from "primereact/chip";
import { Tooltip } from "primereact/tooltip";
import { Toast } from "primereact/toast";

import { Kics, Ifrs, Fs, Post } from "@/.contentlayer/generated";
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
  prev?: Kics | Ifrs | Post | Fs;
  next?: Kics | Ifrs | Post | Fs;
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
            className="w-full"
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
            className="w-full"
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
    <li className="tw-list-none tw-pl-8 -tw-indent-4 tw-py-1">
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
    <div className="grid">
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
      {/* <i className={icon} style= {{paddingRight: '5px'}}></i> */}
      {/* <span className={icon} style= {{ fontSize: '1rem' , paddingRight: '10px'}}></span> */}

      {text}
    </div>
  );
  return (
    <Message
      style={{
        // border: 'solid #696cff',
        // borderWidth: '0 0 0 6px',
        borderWidth: borderWidth,
        // justifyContent: 'left',
        display: "block",
        width: width,
      }}
      // className="border-primary w-full justify-content-start"
      severity={severity}
      // icon= {icon}
      content={text}
    ></Message>
  );
};

const GCallout = ({
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

const GMath = ({
  fontSize = "1.0rem",
  width = "100%",
  borderWidth = "0 0 0 6px",
  marginRatio = "2%",
  children,
}: {
  fontSize?: string;
  width?: string;
  borderWidth?: string;
  marginRatio?: string;
  children: ReactNode;
}) => {
  const _fontSize = fontSize ? fontSize : "1.0rem";
  const _width = width ? width : "100%";
  const _borderWidth = borderWidth ? borderWidth : "0 0 0 6px";
  const _marginRatio = marginRatio ? marginRatio : "2%";

  const content = <div style={{ width: "100%" }}>{children}</div>;

  return (
    <div
      style={{
        marginLeft: _marginRatio,
        marginRight: _marginRatio,
        marginBottom: "10px",
      }}
    >
      <Message
        style={{
          borderWidth: _borderWidth,
          justifyContent: "left",
          width: _width,
          // height: height,
          alignItems: "start",
          fontSize: _fontSize,
          padding: "10px",
        }}
        // className="border-primary w-full justify-content-start"
        severity={"secondary"}
        // icon= { PrimeIcons.PLUS}
        content={content}
      ></Message>
    </div>
  );
};

// 특정 영역 주석용 폰트사이즈 작게
const GSubText = ({ children }: { children: ReactNode }) => {
  // const [fontSize, setFontSize] = useState('1rem');
  // const contentStyle = {
  //     margin: '0',
  //     padding: '0',
  //   };
  // useEffect(() => {setFontSize('0.8rem');}, []);

  return (
    <div style={{ fontSize: "0.75rem" }}>
      <ul
        style={{
          margin: "0px",
          padding: "0px",
        }}
      >
        {children}
      </ul>
    </div>
  );
};

// 수식에서 추가 설명용
// const GCard = ({
//   fontSize = "0.9rem",
//   props,
//   children,
// }: {
//   fontSize: string;
//   props: CardProps;
//   children: ReactNode;
// }) => {
//   const cardStyle = {
//     fontSize,
//     //  background: '#ffffff', // 배경
//     border: "none", // 테두리 없음
//     padding: "0",
//   };

//   const contentStyle = {
//     margin: "0",
//     padding: "0",
//   };

//   return (
//     <Card {...props} style={cardStyle}>
//       <div style={contentStyle}>
//         <ul style={contentStyle}>{children}</ul>
//       </div>
//     </Card>
//   );
// };

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
    color: "#526a76",
    letterSpacing: "-0.04em"
  };

  const contentStyle = {
    // margin: "0",
    // padding: pl+"rem"
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
      <div style={contentStyle} className="tw-pb-2 tw-italic ... ">
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

  return (
    <div style={{ textAlign: "center" }}>
      {/* <Image src={props.src} width={width1} style={imageStyle} /> */}
      <Image
        width={width}
        height={height}
        className="tw-mx-auto tw-block tw-my-2"
        // style={imageStyle}
        {...rest}
      />
      {caption && <p className="tw-pb-4 tw-text-gray-500 tw-text-sm" >&lt;{caption}&gt;</p>}
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
        data-pr-position="left"
        data-pr-at="left bottom+2"
        data-pr-my="left top"
      />
    </>
  );
};

const GTooltipIcon = ({
  desc,
  icon = "pi pi pi-question-circle", /* pi-exclamation-circle */
  severity = "secondary", /* secondary success */
}: {
  desc: string;
  icon: string;
  severity: "success" | "info" | "warning" | "secondary" | "danger";
}) => {
  return (
    <>
      <Tooltip target=".tooltip-target" style={{ width: "400px" }} />
      <Button
        icon={icon}
        text
        rounded
        severity={severity}
        className="tooltip-target !tw-py-0 !tw-px-0 !tw-align-baseline !tw-w-6"
        data-pr-tooltip={desc}
        data-pr-position="left"
        data-pr-at="left bottom+2"
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
  GMessage,
  G2Col,
  GSheet,
  GMath,
  GSubText,
  GCenterImg,
  Gh1,
  Gh2,
  Gh3,
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

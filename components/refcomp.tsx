"use client";
import React, { useRef, ReactNode } from "react";
import Link from "next/link";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Chip } from "primereact/chip";

import JSON from "@/public/data/KICS-INDEX.json";
import checklist from "@/public/data/check.json";

const GChip = ({ id }: { id: number }) => {
  const icon = "pi pi-question-circle";
  const removable = true;

  const selectedItem = checklist.find((s) => s.id == id);

  return (
    <Chip
      label={selectedItem ? selectedItem.desc : "not-found"}
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
  const selectedItem = checklist.find((s) => s.id == children);
  // const selectedItem = "aaa";
  // console.log("selected ");
  // console.log(children);
  return (
    <Chip
      label={selectedItem ? selectedItem.desc : "not-found"}
      icon={icon}
      removable={removable}
    />
  );
};

const GTooltipLink = ({ id }: { id: string }) => {
  // console.log("prop : " + id);
  const data = JSON;
  // console.log("aaa1 :" + data[0].id);

  if (!data) {
    return <>{id}</>;
  }
  // no data for prop.id
  // const aaa = data.filter( s => s.id === prop.id)[0] ;

  const aaa = data.find((s) => s.id === id);
  // console.log("aaa :" + aaa?.id);
  if (!aaa) {
    return <> {id} </>;
  }

  // console.log("bbb :" + aaa.id);

  //    참조위치를 설명하고 이동하는 링크기능과 + 용어설명의 용도를 추가하기 위해 구분함. (용어설명은 url, 및 hierachy 를 구분하는 LEVEL은 없고, id, title, desc로 구성되며 해당용어에 대한 설명만을 기술함. )
  //    const label = aaa.title + ' ('+ aaa.desc + ')';
  // const label = aaa.url ? aaa.title + " (" + aaa.desc + ")" : aaa.title + "*"];
  const label = aaa.url ? aaa.title + " (" + aaa.desc + ")" : aaa.title;

  const desc = aaa.url
    ? aaa.LEVEL1 +
      (aaa.LEVEL2
        ? " > " + aaa.LEVEL2 + (aaa.LEVEL3 ? " > " + aaa.LEVEL3 + " > " : "")
        : "") +
      aaa.desc
    : aaa.desc;

  // OverlayPanel : 마우스가 hover될때 표시되는 내용도 용도에 따라 다르기 때문에 style을 다르게 구분함.
  // {aaa.LEVEL3 !== undefined ? ( aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + ' > ' + aaa.LEVEL3 + ' > ' + aaa.desc)
  // : ( aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + ' > ' + aaa.desc)}
  // aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + (aaa.LEVEL3 !== undefined ? ' > ' + aaa.LEVEL3 + ' > ' : ' > ') + aaa.desc
  //textDecoration: aaa.url ? 'none' : 'underline' }}

  return (
    <>
      <Tooltip target=".custom-target-icon1" />
      {aaa.url ? (
        <Link href="$/{aaa.url}" className="custom-target-icon1" />
      ) : (
        <Button
          severity="warning"
          link
          label={label}
          className="custom-target-icon !tw-py-0 !tw-px-1 tw-italic  tw-text-current "
          // className="custom-target-icon pb-0 pr-2 font-italic text-base text-primary underline"
          // style={{
          //   padding: aaa.url ? "0px 5px" : "0px 0px",
          //   fontStyle: aaa.url ? "normal" : "italic",
          //   fontSize: "1em",
          //   color: aaa.url ? "#2e5075" : "#2e5075" /*  555555*/,
          //   textDecoration: aaa.url ? "none" : "none",
          // }}

          data-pr-tooltip={desc}
          data-pr-position="right"
          data-pr-at="right+5 top"
          data-pr-my="left center-2"
        />
      )}
    </>
  );
};

export { GChip, GChecklist, GTooltipLink };

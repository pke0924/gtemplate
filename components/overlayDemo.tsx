"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";

import JSON from "@/public/data/KICS-INDEX.json";

export default function OverlayDemo({ id }: { id: string }) {
  // console.log("prop : " + id);
  const data = JSON;
  // console.log("aaa1 :" + data[0].id);
  // no data for prop.id
  // const aaa = data.filter( s => s.id === prop.id)[0] ;

  if (!data) {
    return <>{id}</>;
  }

  const aaa = data.find((s) => s.id === id);
  // console.log("aaa :" + aaa?.id);
  if (!aaa) {
    return <> {id} </>;
  }

  // console.log("bbb :" + aaa.id);

  //    참조위치를 설명하고 이동하는 링크기능과 + 용어설명의 용도를 추가하기 위해 구분함. (용어설명은 url, 및 hierachy 를 구분하는 LEVEL은 없고, id, title, desc로 구성되며 해당용어에 대한 설명만을 기술함. )
  //    const label = aaa.title + ' ('+ aaa.desc + ')';

  const isLink = aaa && aaa.url ? true : false;
  const url = isLink && aaa.url ? aaa.url : "/";
  // const label = isLink ? aaa.title + " (" + aaa.desc + ")" : aaa.title + "*";
  const label = isLink ? aaa.title + " (" + aaa.desc + ")" : aaa.title;

  const desc = isLink
    ? aaa.LEVEL1 +
      (aaa.LEVEL2
        ? " > " + aaa.LEVEL2 + (aaa.LEVEL3 ? " > " + aaa.LEVEL3 + " > " : ">")
        : ">") +
      aaa.desc
    : aaa.desc;

  // OverlayPanel : 마우스가 hover될때 표시되는 내용도 용도에 따라 다르기 때문에 style을 다르게 구분함.
  // {aaa.LEVEL3 !== undefined ? ( aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + ' > ' + aaa.LEVEL3 + ' > ' + aaa.desc)
  // : ( aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + ' > ' + aaa.desc)}
  // aaa.LEVEL1 + ' > ' + aaa.LEVEL2 + (aaa.LEVEL3 !== undefined ? ' > ' + aaa.LEVEL3 + ' > ' : ' > ') + aaa.desc
  //textDecoration: aaa.url ? 'none' : 'underline' }}

  return (
    <>
      <Tooltip target=".custom-target-icon" />
      {isLink ? (
        <Link
          target="blank"
          href={url}
          className="custom-target-icon !tw-py-0 !tw-px-1 tw-italic  tw-text-current tw-underline"
          data-pr-tooltip={desc}
          data-pr-position="left"
          data-pr-at="left bottom+2"
          data-pr-my="left top"
        >
          {label}
        </Link>
      ) : (
        <Button
          severity="warning"
          link
          label={label}
          className="custom-target-icon !tw-py-0 !tw-px-1 tw-italic  tw-text-current"
          // className="custom-target-icon pb-0 pr-2 font-italic text-base text-primary underline"
          data-pr-tooltip={desc}
          data-pr-position="left"
          data-pr-at="left bottom+2"
          data-pr-my="left top"
        />
      )}
    </>
  );
}

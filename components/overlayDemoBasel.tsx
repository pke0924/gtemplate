"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Tooltip } from "primereact/tooltip";

import JSON from "@/public/data/IndexBasel.json";

export default function eee({ id }: { id: string }) {

  const data = JSON;

  if (!data) {
    return <>{id}</>;
  }

  const aaa = data.find((s) => s.id === id);

  if (!aaa) {
    return <> {id} </>;
  }

  const url = aaa.url ;
  const label = aaa.desc;

  const desc =  aaa.lv1 + (aaa.lv2 ? " > " + aaa.lv2 + (aaa.lv3 ? " > " + aaa.lv3 + " > " : ">") : ">")
                        +  aaa.desc ;


  return (
    <>
      <Tooltip target=".custom-target-icon" />
      { 
        <Link
          target="blank"
          href={url}
          className="custom-target-icon !tw-py-0 tw-text-current tw-underline tw-underline-offset-4 tw-decoration-dashed tw-decoration-blue-500/50 "
          data-pr-tooltip={desc}
          data-pr-position="bottom"
          data-pr-at="left bottom"
          data-pr-my="left top"
        >
          {label}
        </Link>
       }
    </>
  );
}

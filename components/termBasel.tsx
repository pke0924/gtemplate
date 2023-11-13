"use client";
import React, { useRef } from "react";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
import JSON from "@/public/data/basel_term.json";

export default function aaa({ id }: { id: string }) {

  const data = JSON;

  if (!data) {
    return <>{id}</>;
  }

  const aaa = data.find((s) => s.id === id);

  if (!aaa) {
    return <> {id} </>;
  }

  const label = aaa.label;
  const desc =  aaa.desc  ;

  return (
    <>
      <Tooltip target=".custom-target-icon" />
      { 
        <Button
        label = {label}
        className="custom-target-icon !tw-bg-transparent !tw-p-0 !tw-text-inherit tw-underline tw-underline-offset-4 tw-decoration-dashed tw-decoration-red-500/50 ;"
        data-pr-tooltip={desc}
        data-pr-position="bottom"
        data-pr-at="left bottom"
        data-pr-my="left top"
      />
       }
    </>
  );
}

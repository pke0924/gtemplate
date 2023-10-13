import Link from "next/link";
import { Metadata } from "next";
import AppTopbar from "@/components/layout/AppTopbar1";
import classNames, { containerClassName } from "@/provider/classNameUtil";
// import { classNames } from "primereact/utils";

// const containerClassName = classNames(
//   // "layout-container",
//   "layout-topbar-indigo",
//   "layout-menu-light",
//   "layout-menu-profile-end",
//   {
//     "layout-static": true,
//     "layout-static-inactive": true,
//     "layout-overlay-active": true,
//   }
// );

export default function Home() {
  console.log("aaa");
  console.log(containerClassName);

  return (
    <div className={containerClassName}>
      <AppTopbar />

      {/* <div className="tw-flex tw-flex-col md:tw-flex-row">
        <h1>H1</h1>
        <h2>H2</h2>
        <h1 className="tw-text-3xl tw-font-bold tw-underline">Hello world!</h1>
      </div> */}
    </div>
  );
}

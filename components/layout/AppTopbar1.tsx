"use client";
import { InputText } from "primereact/inputtext";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { LayoutContext } from "@/provider/context/layoutcontext";
import type { AppTopbarRef } from "@/types/types";
import { Button } from "primereact/button";
import Link from "next/link";
import { MegaMenu } from "primereact/megamenu";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { StyleClass } from "primereact/styleclass";
import { useRouter } from "next/navigation";
import { classNames } from "primereact/utils";
import { Ripple } from "primereact/ripple";

import { Inter, Roboto, Noto_Sans_KR } from "next/font/google"; // Roboto와 한글 NotoSans를 사용합니다.

// import JSON from "@/public/data/topbarMenu.json";

// import "@/styles/comp/_topbar.css";
// import top from "@/styles/comp/_topbar.module.scss";
// import top from "@/styles/layout/layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "400", "700"],
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { onMenuToggle, showRightSidebar, onTopbarMenuToggle } =
    useContext(LayoutContext);
  const router = useRouter();
  const menubuttonRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const closeBtnRef = useRef(null);

  const searchRef = useRef(null);
  const bellRef = useRef(null);
  const avatarRef = useRef(null);
  const tableRef = useRef(null);

  const onMenuButtonClick = () => {
    onMenuToggle();
  };

  const onRightMenuButtonClick = () => {
    showRightSidebar();
  };

  const onMobileTopbarMenuButtonClick = () => {
    onTopbarMenuToggle();
  };

  const focusSearchInput = () => {
    setTimeout(() => {
      (searchInputRef.current as any).focus();
    }, 0);
  };

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
  }));

  // const jsonmodel = JSON;

  const model = [
    {
      label: "About",
      icon: "pi pi-fw pi-home",
      command: () => router.push("/posts"),
    },
    {
      label: "Resources",
      icon: "pi pi-fw pi-plus",
      items: [
        [
          {
            label: "Risk Achives",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                label: "KICS",
                icon: "pi pi-fw pi-id-card",
                command: () => router.push("/kics"),
              },
              {
                label: "Input",
                icon: "pi pi-fw pi-check-square",
                command: () => router.push("/posts"),
              },
            ],
          },
        ],
        [
          {
            label: "Risk Achives",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                label: "KICS",
                icon: "pi pi-fw pi-id-card",
                command: () => router.push("/kics"),
              },
              {
                label: "Input",
                icon: "pi pi-fw pi-check-square",
                command: () => router.push("/posts"),
              },
            ],
          },
          {
            label: "IFRS Achives",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                label: "IFRS 17",
                icon: "pi pi-fw pi-id-card",
                command: () => router.push("/kics"),
              },
              {
                label: "IFRS 9",
                icon: "pi pi-fw pi-check-square",
                command: () => router.push("/posts"),
              },
            ],
          },
        ],
      ],
    },
  ];

  const startClass = classNames("layout-megamenu-start");

  // const start = (
  const start = (
    // <Link href="/apps/blog/detail" className ={startClass}>Dashboard</Link>
    <Link href="/apps/blog/detail" style={{ color: `white`, fontSize: `1rem` }}>
      Dashboard
    </Link>
  );

  //   const klass: string = top["layout-topbar"];

  //   const containerClassName = classNames(top.layoutTopbar);
  return (
    <div className="layout-topbar">
      <div className="layout-topbar-start">
        <Link className="layout-topbar-logo" href="/">
          <svg
            width="167"
            height="32"
            viewBox="0 0 167 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="layout-topbar-logo-full"
          >
            <path
              d="M 18.660156 5.667969 C 13.339844 5.886719 7.945312 7.351562 4.566406 9.480469 C 3.675781 10.042969 2.265625 11.210938 1.746094 11.8125 C 0.945312 12.757812 0.425781 13.699219 0.144531 14.71875 C 0.015625 15.207031 0.015625 16.800781 0.144531 17.28125 C 0.769531 19.550781 2.699219 21.574219 5.78125 23.207031 C 8.296875 24.539062 11.746094 25.554688 15.335938 26.03125 C 17.183594 26.273438 18.234375 26.335938 20.539062 26.335938 C 23.398438 26.335938 25.328125 26.164062 27.789062 25.6875 C 33.632812 24.542969 38.117188 22.148438 39.992188 19.175781 C 41.535156 16.71875 41.289062 14.207031 39.253906 11.8125 C 38.621094 11.0625 36.8125 9.664062 35.652344 9.023438 C 31.292969 6.625 25.097656 5.398438 18.660156 5.667969 Z M 22.429688 7.125 C 24.855469 7.273438 26.816406 7.539062 28.699219 7.976562 C 33.265625 9.039062 36.84375 11.03125 38.347656 13.355469 C 38.484375 13.570312 38.597656 13.773438 38.597656 13.8125 C 38.597656 13.855469 37.066406 13.875 33.914062 13.875 L 29.238281 13.875 L 28.957031 13.53125 C 28.589844 13.085938 27.644531 12.3125 27.003906 11.929688 C 25.945312 11.304688 24.214844 10.738281 22.710938 10.511719 C 21.597656 10.351562 19.210938 10.367188 18.121094 10.550781 C 15.101562 11.054688 12.714844 12.367188 11.691406 14.082031 C 11.011719 15.207031 10.953125 16.457031 11.53125 17.644531 C 11.796875 18.1875 12.5625 19.042969 13.253906 19.550781 C 14.613281 20.570312 16.382812 21.210938 18.585938 21.507812 C 19.410156 21.613281 19.796875 21.632812 20.859375 21.605469 C 22.277344 21.574219 23.007812 21.476562 24.253906 21.148438 C 25.867188 20.730469 27.089844 20.132812 28.179688 19.210938 L 28.699219 18.78125 L 23 18.761719 L 17.296875 18.75 L 17.296875 16 L 39.160156 16 L 39.160156 16.367188 C 39.160156 17.289062 38.429688 18.738281 37.445312 19.75 C 35.835938 21.425781 32.921875 22.917969 29.597656 23.78125 C 24.761719 25.039062 19.417969 25.257812 14.277344 24.398438 C 9.015625 23.523438 4.820312 21.539062 2.945312 19.03125 C 1.761719 17.445312 1.511719 15.730469 2.234375 14.113281 C 2.980469 12.429688 4.875 10.804688 7.542969 9.554688 C 11.402344 7.75 17.160156 6.8125 22.429688 7.125 Z M 22.429688 7.125"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="var(--topbar-item-text-color)"
            />
            <text
              x="60"
              y="24"
              fontSize="1.6rem"
              fontWeight="800"
              letterSpacing="0.2rem"
              className={inter.className}
              fill="var(--topbar-item-text-color)"
            >
              GBook
            </text>
          </svg>
          <svg
            width="41"
            height="32"
            viewBox="0 0 41 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="layout-topbar-logo-slim"
          >
            <path
              d="M 18.660156 5.667969 C 13.339844 5.886719 7.945312 7.351562 4.566406 9.480469 C 3.675781 10.042969 2.265625 11.210938 1.746094 11.8125 C 0.945312 12.757812 0.425781 13.699219 0.144531 14.71875 C 0.015625 15.207031 0.015625 16.800781 0.144531 17.28125 C 0.769531 19.550781 2.699219 21.574219 5.78125 23.207031 C 8.296875 24.539062 11.746094 25.554688 15.335938 26.03125 C 17.183594 26.273438 18.234375 26.335938 20.539062 26.335938 C 23.398438 26.335938 25.328125 26.164062 27.789062 25.6875 C 33.632812 24.542969 38.117188 22.148438 39.992188 19.175781 C 41.535156 16.71875 41.289062 14.207031 39.253906 11.8125 C 38.621094 11.0625 36.8125 9.664062 35.652344 9.023438 C 31.292969 6.625 25.097656 5.398438 18.660156 5.667969 Z M 22.429688 7.125 C 24.855469 7.273438 26.816406 7.539062 28.699219 7.976562 C 33.265625 9.039062 36.84375 11.03125 38.347656 13.355469 C 38.484375 13.570312 38.597656 13.773438 38.597656 13.8125 C 38.597656 13.855469 37.066406 13.875 33.914062 13.875 L 29.238281 13.875 L 28.957031 13.53125 C 28.589844 13.085938 27.644531 12.3125 27.003906 11.929688 C 25.945312 11.304688 24.214844 10.738281 22.710938 10.511719 C 21.597656 10.351562 19.210938 10.367188 18.121094 10.550781 C 15.101562 11.054688 12.714844 12.367188 11.691406 14.082031 C 11.011719 15.207031 10.953125 16.457031 11.53125 17.644531 C 11.796875 18.1875 12.5625 19.042969 13.253906 19.550781 C 14.613281 20.570312 16.382812 21.210938 18.585938 21.507812 C 19.410156 21.613281 19.796875 21.632812 20.859375 21.605469 C 22.277344 21.574219 23.007812 21.476562 24.253906 21.148438 C 25.867188 20.730469 27.089844 20.132812 28.179688 19.210938 L 28.699219 18.78125 L 23 18.761719 L 17.296875 18.75 L 17.296875 16 L 39.160156 16 L 39.160156 16.367188 C 39.160156 17.289062 38.429688 18.738281 37.445312 19.75 C 35.835938 21.425781 32.921875 22.917969 29.597656 23.78125 C 24.761719 25.039062 19.417969 25.257812 14.277344 24.398438 C 9.015625 23.523438 4.820312 21.539062 2.945312 19.03125 C 1.761719 17.445312 1.511719 15.730469 2.234375 14.113281 C 2.980469 12.429688 4.875 10.804688 7.542969 9.554688 C 11.402344 7.75 17.160156 6.8125 22.429688 7.125 Z M 22.429688 7.125"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="var(--topbar-item-text-color)"
            />
          </svg>
        </Link>
        <a
          ref={menubuttonRef}
          className="p-ripple layout-menu-button"
          onClick={onMenuButtonClick}
        >
          <i className="pi pi-chevron-right"></i>
          <Ripple />
        </a>
        <div className="layout-topbar-mobile-button">
          <a
            ref={mobileButtonRef}
            className="p-ripple "
            onClick={onMobileTopbarMenuButtonClick}
          >
            <i className="pi pi-ellipsis-v"></i>
            <Ripple />
          </a>

          <a
            ref={mobileButtonRef}
            onClick={onRightMenuButtonClick}
            className="p-ripple "
          >
            <i className="pi pi-arrow-left"></i>
            <Ripple />
          </a>
        </div>
      </div>

      <div className="layout-topbar-end">
        <div className="layout-topbar-actions-start">
          <MegaMenu model={model} start={start} className="layout-megamenu" />
          {/* <Menubar model={items} className="layout-menubar"/> */}
        </div>

        <div className="layout-topbar-actions-end">
          <ul className="layout-topbar-items">
            <li className="layout-topbar-search">
              <StyleClass
                nodeRef={searchRef}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="px-scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="px-fadeout"
                hideOnOutsideClick
              >
                <a
                  className="p-ripple"
                  ref={searchRef}
                  onClick={focusSearchInput}
                >
                  <i className="pi pi-search"></i>
                  <Ripple />
                </a>
              </StyleClass>

              <div className="layout-search-panel hidden p-input-filled">
                <i className="pi pi-search"></i>
                <InputText ref={searchInputRef} placeholder="Search" />
                <StyleClass
                  nodeRef={closeBtnRef}
                  selector=".layout-search-panel"
                  leaveActiveClassName="fadeout"
                  leaveToClassName="hidden"
                >
                  <Button
                    ref={closeBtnRef}
                    type="button"
                    icon="pi pi-times"
                    rounded
                    text
                    className="p-button-plain"
                  ></Button>
                </StyleClass>
              </div>
            </li>
            <li>
              <a onClick={onRightMenuButtonClick} className="p-ripple">
                <i className="pi pi-arrow-left"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;

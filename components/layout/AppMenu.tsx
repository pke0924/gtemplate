import AppSubMenu from "./AppSubMenu";
import type { MenuModel } from "@/types/types";

const AppMenu = ({ menus }: { menus: MenuModel[] }) => {
  const model: MenuModel[] = [
    {
      label: "Dashboards",
      icon: "pi pi-home",
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "작성가이드",
          icon: "pi pi-fw pi-exclamation-circle",
          to: "/posts/read-me",
        },
        {
          label: "component",
          icon: "pi pi-fw pi-tags",
          to: "/posts/explain-component",
        },
      ],
    },
  ];

  // console.log("AppMenu");
  // console.log(menus);

  const model2 = menus ? menus : model;

  return <AppSubMenu model={model2} />;
};

export default AppMenu;

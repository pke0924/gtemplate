import AppSubMenu from "./AppSubMenu";
import type { MenuModel } from "@/types/types";

const AppMenu = () => {
  const model: MenuModel[] = [
    {
      label: "Dashboards",
      icon: "pi pi-home",
      items: [
        {
          label: "Sales Dashboard",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Analytics Dashboard",
          icon: "pi pi-fw pi-chart-pie",
          to: "/dashboards/dashboardanalytics",
        },
        {
          label: "SaaS Dashboard",
          icon: "pi pi-fw pi-bolt",
          to: "/dashboards/dashboardsaas",
        },
        {
          label: "Clickme",
          icon: "pi pi-fw pi-bolt",
          to: "/kics/click-me",
        },
        {
          label: "Kics Clickme",
          icon: "pi pi-fw pi-bolt",
          to: "/kics/click-me",
        },
        {
          label: "terms",
          icon: "pi pi-fw pi-bolt",
          to: "/kics/term",
        },
      ],
    },
  ];

  // console.log("bbbbb");
  // console.log(menus);
  // const model2 = menus ? menus : model;

  return <AppSubMenu model={model} />;
};

export default AppMenu;

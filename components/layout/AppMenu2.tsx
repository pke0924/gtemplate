import AppSubMenu from "./AppSubMenu";
import type { MenuModel } from "@/types/types";

import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { AppMenuItem } from "@/types/types";
import { LayoutContext } from "@/provider/context/layoutcontext";
import { MenuProvider } from "@/provider/context/menucontext";
import Link from "next/link";
import { MenuItem } from "primereact/menuitem";
import { AppMenuProps } from "@/types/layout";

// deprecated : AppMeueProps is not working in breadcrumb!!!!!1
const AppMenu = (props: AppMenuProps) => {
  const { layoutConfig } = useContext(LayoutContext);
  const { menus } = props;
  // const model: AppMenuItem[] = models;

  console.log("menu111 :" + menus);
  // console.log('menu1 :' +  menu[0].label);
  const model: AppMenuItem[] = menus;

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model &&
          model.map((item, i) => {
            return !item?.separator ? (
              <AppMenuitem item={item} root={true} index={i} key={item.label} />
            ) : (
              <li key={i} className="menu-separator"></li>
            );
          })}

        {/* <Link href="https://blocks.primereact.org" target="_blank" style={{ cursor: 'pointer' }}>
                    <img alt="Prime Blocks" className="w-full mt-3" src={`/layout/images/banner-primeblocks${layoutConfig.colorScheme === 'light' ? '' : '-dark'}.png`} />
                </Link> */}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;

"use client";
import Head from "next/head";
import { Metadata } from "next";
import React, { useState } from "react";
import type {
  ChildContainerProps,
  LayoutContextProps,
  LayoutConfig,
  LayoutState,
  Breadcrumb,
} from "../../types/types";

export const LayoutContext = React.createContext({} as LayoutContextProps);

export const LayoutProvider = (props: ChildContainerProps) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    ripple: true,
    inputStyle: "outlined",
    menuMode: "static",
    colorScheme: "light",
    componentTheme: "bluegrey",
    scale: 14,
    menuTheme: "light",
    topbarTheme: "blue",
    menuProfilePosition: "start",
    desktopMenuActive: true,
    mobileMenuActive: false,
    mobileTopbarActive: false,
  });

  const [layoutState, setLayoutState] = useState<LayoutState>({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    configSidebarVisible: false,
    profileSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    rightMenuActive: false,
    topbarMenuActive: false,
    sidebarActive: false,
    anchored: false,
    overlaySubmenuActive: false,
    menuProfileActive: false,
    resetMenu: false,
  });

  const onMenuProfileToggle = () => {
    setLayoutState((prevLayoutState: LayoutState) => ({
      ...prevLayoutState,
      menuProfileActive: !prevLayoutState.menuProfileActive,
    }));
  };

  const isSidebarActive = () =>
    layoutState.overlayMenuActive ||
    layoutState.staticMenuMobileActive ||
    layoutState.overlaySubmenuActive;

  const onMenuToggle = () => {
    if (isOverlay()) {
      setLayoutState((prevLayoutState: LayoutState) => ({
        ...prevLayoutState,
        overlayMenuActive: !prevLayoutState.overlayMenuActive,
      }));
    }

    if (isDesktop()) {
      setLayoutState((prevLayoutState: LayoutState) => ({
        ...prevLayoutState,
        staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive,
      }));
    } else {
      setLayoutState((prevLayoutState) => ({
        ...prevLayoutState,
        staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
      }));
    }
  };

  const isOverlay = () => {
    return layoutConfig.menuMode === "overlay";
  };

  const isSlim = () => {
    return layoutConfig.menuMode === "slim";
  };

  const isSlimPlus = () => {
    return layoutConfig.menuMode === "slim-plus";
  };

  const isHorizontal = () => {
    return layoutConfig.menuMode === "horizontal";
  };

  const isDesktop = () => {
    return window.innerWidth > 991;
  };
  const onTopbarMenuToggle = () => {
    setLayoutState((prevLayoutState) => ({
      ...prevLayoutState,
      topbarMenuActive: !prevLayoutState.topbarMenuActive,
    }));
  };
  const showRightSidebar = () => {
    setLayoutState((prevLayoutState) => ({
      ...prevLayoutState,
      rightMenuActive: true,
    }));
  };

  const value = {
    layoutConfig,
    setLayoutConfig,
    layoutState,
    setLayoutState,
    onMenuToggle,
    isSlim,
    isSlimPlus,
    isHorizontal,
    isDesktop,
    isSidebarActive,
    breadcrumbs,
    setBreadcrumbs,
    onMenuProfileToggle,
    onTopbarMenuToggle,
    showRightSidebar,
  };

  return (
    <LayoutContext.Provider value={value}>
      {props.children}
    </LayoutContext.Provider>
  );
};

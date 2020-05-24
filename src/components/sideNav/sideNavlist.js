import React from "react";
import { SearchBar } from "../sideNav/sideNavSearch/searchBar";
import { SideBarMenu } from "./sideNavMenu/sideNavMenu";
export const SideNav = () => {
  return (
    <>
      <SearchBar />
      <hr />
      <SideBarMenu />
    </>
  );
};

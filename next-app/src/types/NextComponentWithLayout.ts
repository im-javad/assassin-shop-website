import { NextComponentType } from "next";

export type NextComponentWithLayout = NextComponentType & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

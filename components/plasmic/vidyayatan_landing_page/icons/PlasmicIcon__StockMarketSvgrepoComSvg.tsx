// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StockMarketSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StockMarketSvgrepoComSvgIcon(
  props: StockMarketSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M204.344 155.188l45.125 45.109L409.344 40.422H268.031l48.032 48.031-66.594 66.578-44.516-44.515L41.906 264.969l22 23.25zM512 102.313L276.031 330.281l-63.375-63.375L0 471.578h512z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default StockMarketSvgrepoComSvgIcon;
/* prettier-ignore-end */

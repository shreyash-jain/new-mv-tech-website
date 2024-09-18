// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EcommerceCartSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function EcommerceCartSvgrepoComSvgIcon(
  props: EcommerceCartSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        data-name={"Vrstva 536"}
        fill={"none"}
        stroke={"#fff"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
      >
        <path d={"M1.68 2.77h3.5l3.16 13.71H21l1.32-9.76H6.09"}></path>

        <rect
          x={"9.3"}
          y={"18.62"}
          width={"2.61"}
          height={"2.61"}
          rx={"1.3"}
        ></rect>

        <rect
          x={"9.3"}
          y={"18.62"}
          width={"2.61"}
          height={"2.61"}
          rx={"1.3"}
        ></rect>

        <rect
          x={"16.16"}
          y={"18.62"}
          width={"2.61"}
          height={"2.61"}
          rx={"1.3"}
        ></rect>
      </g>
    </svg>
  );
}

export default EcommerceCartSvgrepoComSvgIcon;
/* prettier-ignore-end */

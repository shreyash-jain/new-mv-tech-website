// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrowserCostSolidSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function BrowserCostSolidSvgrepoComSvgIcon(
  props: BrowserCostSolidSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      fill={"currentColor"}
      stroke={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          fill={"none"}
          d={"M0 0h48v48H0z"}
          data-name={"invisible box"}
        ></path>

        <path
          d={
            "M44 6H4a2 2 0 00-2 2v32a2 2 0 002 2h18v-2.2a11.2 11.2 0 01-4.2-1.8 1.8 1.8 0 01-.3-2.6 2 2 0 012.8-.6 6.4 6.4 0 004 1.3c1.5 0 2.5-.6 2.5-1.4s0-1.2-3.3-1.8-6.4-1.8-6.4-5.5 2-4.7 4.9-5.3V20a2 2 0 014 0v2.2a12 12 0 013.1 1.3 1.9 1.9 0 01.4 2.8 1.8 1.8 0 01-2.7.5 5.9 5.9 0 00-3.2-.9 3 3 0 00-1.8.4c-.3.3-.5.5-.5.9s0 1.1 3.5 1.8 6.2 1.8 6.2 5.5h0a4.9 4.9 0 01-2 4 5.9 5.9 0 01-3 1.3V42h18a2 2 0 002-2V8a2 2 0 00-2-2zM10 16a2 2 0 112-2 2 2 0 01-2 2zm6 0a2 2 0 112-2 2 2 0 01-2 2zm6 0a2 2 0 112-2 2 2 0 01-2 2z"
          }
          data-name={"icons Q2"}
        ></path>
      </g>
    </svg>
  );
}

export default BrowserCostSolidSvgrepoComSvgIcon;
/* prettier-ignore-end */

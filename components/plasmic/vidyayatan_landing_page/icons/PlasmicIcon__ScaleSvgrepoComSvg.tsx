// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScaleSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScaleSvgrepoComSvgIcon(props: ScaleSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M15.906 2c0 .414.336.75.75.75h3.533l-7.439 7.44V8a.75.75 0 00-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-2.19l7.44-7.44v3.534a.75.75 0 001.5 0V2a.75.75 0 00-.75-.75h-5.344a.75.75 0 00-.75.75z"
          }
        ></path>

        <path
          d={
            "M19.752 7.43a2.25 2.25 0 002.238 2.164C22 10.32 22 11.119 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.881 0 1.68 0 2.406.01a2.25 2.25 0 002.164 2.238l-2.623 2.623A2.25 2.25 0 009.75 8v4A2.25 2.25 0 0012 14.25h4a2.25 2.25 0 001.129-4.197l2.623-2.623z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ScaleSvgrepoComSvgIcon;
/* prettier-ignore-end */

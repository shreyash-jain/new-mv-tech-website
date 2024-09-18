// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GuiManagementSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function GuiManagementSvgrepoComSvgIcon(
  props: GuiManagementSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30 24v-2h-2.101a4.968 4.968 0 00-.732-1.753l1.49-1.49-1.414-1.414-1.49 1.49A4.968 4.968 0 0024 18.101V16h-2v2.101a4.968 4.968 0 00-1.753.732l-1.49-1.49-1.414 1.414 1.49 1.49A4.968 4.968 0 0018.101 22H16v2h2.101a4.968 4.968 0 00.732 1.753l-1.49 1.49 1.414 1.414 1.49-1.49a4.968 4.968 0 001.753.732V30h2v-2.101a4.968 4.968 0 001.753-.732l1.49 1.49 1.414-1.414-1.49-1.49A4.968 4.968 0 0027.899 24zm-7 2a3 3 0 113-3 3.003 3.003 0 01-3 3z"
        }
      ></path>

      <path
        d={
          "M28 4H4a2.002 2.002 0 00-2 2v20a2.002 2.002 0 002 2h10v-2H4V12h24v3h2V6a2.002 2.002 0 00-2-2zm0 6H4V6h24z"
        }
      ></path>

      <circle cx={"20"} cy={"8"} r={"1"}></circle>

      <circle cx={"23"} cy={"8"} r={"1"}></circle>

      <circle cx={"26"} cy={"8"} r={"1"}></circle>

      <path
        data-name={"<Transparent Rectangle>"}
        fill={"none"}
        d={"M0 0h32v32H0z"}
      ></path>
    </svg>
  );
}

export default GuiManagementSvgrepoComSvgIcon;
/* prettier-ignore-end */

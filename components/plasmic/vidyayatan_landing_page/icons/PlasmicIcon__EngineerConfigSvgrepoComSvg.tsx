// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EngineerConfigSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function EngineerConfigSvgrepoComSvgIcon(
  props: EngineerConfigSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28.8 20.2c-1.1.2-2 0-2.4-.7-.4-.7-.1-1.7.6-2.5-.9-.9-1.9-1.5-3.1-1.8-.3 1-1 1.8-1.8 1.8s-1.5-.7-1.8-1.8c-1.2.3-2.3.9-3.1 1.8.7.8 1 1.8.6 2.5s-1.4.9-2.4.7c-.3.6-.4 1.2-.4 1.8s.1 1.2.2 1.8c1.1-.2 2 0 2.4.7.4.7.1 1.7-.6 2.5.9.9 1.9 1.5 3.1 1.8.3-1 1-1.8 1.8-1.8s1.5.7 1.8 1.8c1.2-.3 2.3-.9 3.1-1.8-.7-.8-1-1.8-.6-2.5s1.4-.9 2.4-.7c.2-.6.2-1.2.2-1.8s.1-1.2 0-1.8z"
        }
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></path>

      <circle
        cx={"22"}
        cy={"22"}
        r={"2"}
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
      ></circle>

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        d={
          "M5 12h16M10.5 8.1L9.3 3.9h0c2.3-1.2 5.1-1.2 7.4 0h0l-1.2 4.2m1-3.2c2 1.2 3.3 3.4 3.3 5.9V12M6.2 12v-1.2c0-2.5 1.3-4.7 3.3-5.9M8 12v2c0 2.1.9 4 2.5 5v0c0 2.1-1.3 3.9-3.2 4.4-2.2.6-3.8 2.6-4.3 5 0 .3.2.6.5.6H13"
        }
      ></path>
    </svg>
  );
}

export default EngineerConfigSvgrepoComSvgIcon;
/* prettier-ignore-end */

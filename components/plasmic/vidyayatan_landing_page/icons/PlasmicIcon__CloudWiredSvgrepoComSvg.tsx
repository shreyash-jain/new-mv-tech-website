// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudWiredSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudWiredSvgrepoComSvgIcon(
  props: CloudWiredSvgrepoComSvgIconProps
) {
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

      <path
        d={
          "M15 18a3 3 0 11-6 0m6 0a3 3 0 00-3-3m3 3h6M9 18a3 3 0 013-3m-3 3H3m9-3v-3m-2.4 0C7.612 12 6 10.46 6 8.56c0-1.574 1.2-3.029 3-3.31A3.793 3.793 0 0112.46 3c1.996 0 3.628 1.493 3.74 3.375 1.06.447 1.8 1.543 1.8 2.73C18 10.704 16.657 12 15 12H9.6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CloudWiredSvgrepoComSvgIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 600 478"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M281.874.196c130.579-3.22 290.117 32.553 315.969 160.588 23.106 114.429-144.919 139.687-242.354 203.986-74.967 49.471-142.623 145.257-221.348 102.016C31.858 410.605-24.739 286.522 10.487 175.269 46.413 61.803 162.893 3.13 281.874.196z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */

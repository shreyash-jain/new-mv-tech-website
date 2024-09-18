// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line91IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line91Icon(props: Line91IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 316 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path stroke={"currentColor"} strokeWidth={"3"} d={"M0 1.5h316"}></path>
    </svg>
  );
}

export default Line91Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector83Icon(props: Vector83IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1056 87"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 85l152-30 98.5-18.5L448 30 644.5 2h170l78 74H1056"}
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Vector83Icon;
/* prettier-ignore-end */

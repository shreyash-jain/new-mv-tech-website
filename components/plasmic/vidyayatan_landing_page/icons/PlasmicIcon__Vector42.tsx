// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector42Icon(props: Vector42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.8 5.026a.3.3 0 01-.093-.587c.608-.2 1.098-.768 1.28-1.485.266-1.055-.223-2.092-1.089-2.31C1.424.525.918.67.503 1.04a.302.302 0 01-.426-.023A.3.3 0 01.1.593C.666.085 1.375-.109 2.047.06c1.188.3 1.873 1.665 1.526 3.042-.231.916-.873 1.647-1.676 1.91a.283.283 0 01-.095.015H1.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector42Icon;
/* prettier-ignore-end */

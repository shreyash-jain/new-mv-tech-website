// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector29Icon(props: Vector29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.346.001C17 3.473 6.36 11.14 5.35 11.93 3.466 13.406-.64 16.439.085 17.914c.242.49.809.8 1.462.837-.2.672.013 1.391.534 1.815.684.557 1.527.302 1.589.282-.222.496-.185 1.06.116 1.451.415.543 1.28.693 1.98.256.013.153.081.696.53 1.093.498.438 1.259.517 1.93.196 1.676-1.31 4.624-2.926 8.031-5.074 8.003-5.042 11.36-7.627 14.783-10.763 1.328-1.216 3.253-4.08 2.026-7.892C29.129.068 25.284.046 21.346 0v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */

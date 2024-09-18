// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector74Icon(props: Vector74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.545.007a4.887 4.887 0 014.242 4.758 4.897 4.897 0 01-4.8 4.986A4.9 4.9 0 010 4.951a4.884 4.884 0 011.818-3.9c-.126 1.446.102 3.234 1.95 3.408l-.054-2.82C3.69.5 4.759-.029 5.539.001l.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector74Icon;
/* prettier-ignore-end */

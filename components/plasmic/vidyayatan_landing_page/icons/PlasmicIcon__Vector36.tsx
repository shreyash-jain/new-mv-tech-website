// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector36Icon(props: Vector36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.529 3.375c-.08 0-.159 0-.235-.003A.3.3 0 010 3.063a.294.294 0 01.309-.294c2.687.069 6.414-1.12 8.5-2.707a.3.3 0 11.365.48C7.054 2.154 3.309 3.374.53 3.374z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector55Icon(props: Vector55IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 211 211"}
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
          "M105.468 210.936c58.092 0 105.468-47.376 105.468-105.468C210.936 47.376 163.56 0 105.468 0 47.376 0 0 47.376 0 105.468c0 58.092 47.376 105.468 105.468 105.468z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector55Icon;
/* prettier-ignore-end */

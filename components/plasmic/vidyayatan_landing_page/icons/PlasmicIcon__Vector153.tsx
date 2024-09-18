// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector153IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector153Icon(props: Vector153IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.473 0a19.934 19.934 0 0015.472 15.473 19.934 19.934 0 00-15.473 15.472A19.934 19.934 0 000 15.472 19.934 19.934 0 0015.473 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector153Icon;
/* prettier-ignore-end */

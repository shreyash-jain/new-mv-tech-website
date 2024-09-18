// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame13Icon(props: Frame13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.938 14a1.313 1.313 0 01-1.313 1.313H4.375a1.313 1.313 0 010-2.626h19.25A1.313 1.313 0 0124.938 14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame13Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame32Icon(props: Frame32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 2A11.013 11.013 0 005 13c0 9.413 10 16.521 10.426 16.819a1 1 0 001.148 0C17 29.52 27 22.413 27 13A11.012 11.012 0 0016 2zm0 7a4 4 0 110 8 4 4 0 010-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame32Icon;
/* prettier-ignore-end */

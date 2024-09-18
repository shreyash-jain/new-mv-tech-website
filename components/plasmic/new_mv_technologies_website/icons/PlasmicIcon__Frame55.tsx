// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame55IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame55Icon(props: Frame55IconProps) {
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
          "M21 14a7 7 0 11-14 0 7 7 0 0114 0zm7.707 14.707a1.001 1.001 0 01-1.415 0l-6.257-6.258a11 11 0 111.415-1.414l6.258 6.258a1.001 1.001 0 010 1.415zM14 23a9 9 0 10-9-9 9.01 9.01 0 009 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame55Icon;
/* prettier-ignore-end */

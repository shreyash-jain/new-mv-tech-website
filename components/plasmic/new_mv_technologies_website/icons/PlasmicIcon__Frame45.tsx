// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame45Icon(props: Frame45IconProps) {
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
          "M29.969 11.351c0 .014 0 .026-.009.04l-2.835 12.984A2 2 0 0125.16 26H6.839a2 2 0 01-1.964-1.625L2.04 11.391c0-.014-.006-.026-.009-.04A2 2 0 015.5 9.674l4.209 4.536 4.475-10.036V4.16a2 2 0 013.632 0 .13.13 0 000 .013l4.475 10.036L26.5 9.674a2 2 0 013.464 1.677h.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame45Icon;
/* prettier-ignore-end */

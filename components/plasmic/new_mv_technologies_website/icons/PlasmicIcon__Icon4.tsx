// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 256 256"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M240 80v120a8 8 0 01-8 8h-72a24 24 0 00-24 23.94 7.9 7.9 0 01-5.12 7.55A8 8 0 01120 232a24 24 0 00-24-24H24a8 8 0 01-8-8V80a8 8 0 018-8h64a32 32 0 0132 32v63.73a8.17 8.17 0 007.47 8.25 8 8 0 008.53-8V104a32 32 0 0132-32h64a8 8 0 018 8zM88.81 56H89a47.92 47.92 0 0136 17.4 4 4 0 006.08 0A47.92 47.92 0 01167 56h.19a4 4 0 003.54-5.84 48 48 0 00-85.46 0A4 4 0 0088.81 56z"
        }
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */

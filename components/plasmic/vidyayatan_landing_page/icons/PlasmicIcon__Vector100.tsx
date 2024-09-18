// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector100IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector100Icon(props: Vector100IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 29"}
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
          "M29.136 1.386c11.28.3 19.482 3.366 21.048 8.736 1.602 5.514-4.17 12.15-14.256 17.694l-.372.198h.12l-.15.222c.126.12.24.246.348.378.336-.156.666-.312.996-.474 12.084-5.838 19.302-13.29 17.532-19.38C52.62 2.622 42.174-.504 28.38.066 22.452.312 15.9 1.236 9.156 2.904A102.6 102.6 0 000 5.61c1.608-.48 3.252-.93 4.938-1.344 8.694-2.148 17.064-3.066 24.204-2.88h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector100Icon;
/* prettier-ignore-end */

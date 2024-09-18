// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector53Icon(props: Vector53IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.433 1.373A1.535 1.535 0 01.022.414.303.303 0 01.188.02a.303.303 0 01.394.17.93.93 0 00.782.578.925.925 0 00.877-.48.301.301 0 01.53.29c-.27.49-.785.794-1.337.794l-.001.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector53Icon;
/* prettier-ignore-end */

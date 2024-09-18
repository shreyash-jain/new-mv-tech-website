// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame58Icon(props: Frame58IconProps) {
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
          "M11 13H5a1 1 0 01-1-1V6a1 1 0 011.707-.707L8 7.588a11.928 11.928 0 018.25-3.346h.066A11.92 11.92 0 0124.7 7.66a1 1 0 01-1.398 1.43 9.94 9.94 0 00-6.986-2.847h-.056c-2.55.008-5 .995-6.841 2.758l2.288 2.293A1 1 0 0111 13zm16 6h-6a1 1 0 00-.707 1.707L22.58 23a9.934 9.934 0 01-6.84 2.761h-.056a9.94 9.94 0 01-6.986-2.846 1 1 0 10-1.398 1.43 11.92 11.92 0 008.384 3.416h.065A11.927 11.927 0 0024 24.416l2.295 2.295A1.001 1.001 0 0028 26v-6a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame58Icon;
/* prettier-ignore-end */

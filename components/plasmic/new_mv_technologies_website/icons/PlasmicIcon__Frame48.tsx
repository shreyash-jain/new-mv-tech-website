// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame48Icon(props: Frame48IconProps) {
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
          "M27 5H5a2 2 0 00-2 2v18a2 2 0 002 2h22a2 2 0 002-2V7a2 2 0 00-2-2zM8.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame48Icon;
/* prettier-ignore-end */

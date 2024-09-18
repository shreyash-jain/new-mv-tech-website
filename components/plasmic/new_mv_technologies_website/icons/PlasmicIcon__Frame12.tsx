// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame12Icon(props: Frame12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.375 12a1.125 1.125 0 01-1.125 1.125h-7.125v7.125a1.125 1.125 0 11-2.25 0v-7.125H3.75a1.125 1.125 0 110-2.25h7.125V3.75a1.125 1.125 0 112.25 0v7.125h7.125A1.125 1.125 0 0121.375 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame12Icon;
/* prettier-ignore-end */

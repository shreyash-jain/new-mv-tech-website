// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector163IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector163Icon(props: Vector163IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 277 357"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M259.99 50.72L147.637 2.273c-14.039-6.059-30.346.417-36.405 14.475L2.272 269.44c-6.059 14.04.417 30.347 14.475 36.405l112.352 48.449c14.04 6.059 30.347-.417 36.405-14.475L274.465 87.126c6.058-14.04-.417-30.347-14.475-36.405z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector163Icon;
/* prettier-ignore-end */

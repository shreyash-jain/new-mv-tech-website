// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector101IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector101Icon(props: Vector101IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M6.354 3.508a2.692 2.692 0 11-5.322-.822A82.02 82.02 0 011.302 1"}
        stroke={"currentColor"}
        strokeWidth={".852"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector101Icon;
/* prettier-ignore-end */

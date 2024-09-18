// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector173IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector173Icon(props: Vector173IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 102 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M101.143 0H0v4.861h101.143V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector173Icon;
/* prettier-ignore-end */

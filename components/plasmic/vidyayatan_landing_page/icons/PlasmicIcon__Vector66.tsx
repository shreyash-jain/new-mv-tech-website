// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector66Icon(props: Vector66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M15.498 0H0v16.59h15.498V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector66Icon;
/* prettier-ignore-end */

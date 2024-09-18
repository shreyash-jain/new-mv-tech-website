// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector171IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector171Icon(props: Vector171IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 134 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M133.829 0H0v4.861h133.829V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector171Icon;
/* prettier-ignore-end */

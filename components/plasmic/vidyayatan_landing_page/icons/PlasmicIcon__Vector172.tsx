// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector172IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector172Icon(props: Vector172IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 128 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M127.426 0H0v4.861h127.426V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector172Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector155IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector155Icon(props: Vector155IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 39"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.409 0a25.03 25.03 0 0019.408 19.409A25.03 25.03 0 0019.41 38.817 25.03 25.03 0 000 19.41 25.03 25.03 0 0019.409 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector155Icon;
/* prettier-ignore-end */

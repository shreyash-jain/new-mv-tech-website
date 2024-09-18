// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector154IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector154Icon(props: Vector154IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.54 0a22.62 22.62 0 0017.54 17.54 22.62 22.62 0 00-17.54 17.54A22.62 22.62 0 000 17.54 22.62 22.62 0 0017.54 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector154Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector165IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector165Icon(props: Vector165IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M65.736 0H5.64A5.641 5.641 0 000 5.641v2.685a5.641 5.641 0 005.641 5.641h60.095a5.641 5.641 0 005.64-5.641V5.64A5.641 5.641 0 0065.737 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector165Icon;
/* prettier-ignore-end */

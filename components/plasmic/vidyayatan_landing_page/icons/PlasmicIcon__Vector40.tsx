// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector40Icon(props: Vector40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.601 6.087c1.989 0 3.601-1.362 3.601-3.043S5.59 0 3.602 0C1.611 0 0 1.363 0 3.044c0 1.68 1.612 3.043 3.601 3.043z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector40Icon;
/* prettier-ignore-end */

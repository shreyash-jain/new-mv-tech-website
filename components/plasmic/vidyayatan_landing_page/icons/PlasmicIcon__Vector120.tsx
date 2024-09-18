// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector120IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector120Icon(props: Vector120IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.54 0h3.972c.294 0 .54.246.54.54 0 .3-.246.54-.54.54H.54C.24 1.08 0 .834 0 .54 0 .24.246 0 .54 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector120Icon;
/* prettier-ignore-end */

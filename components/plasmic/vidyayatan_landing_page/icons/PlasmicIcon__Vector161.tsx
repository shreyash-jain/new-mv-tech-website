// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector161IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector161Icon(props: Vector161IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.663 0a25.336 25.336 0 0019.662 19.663 25.336 25.336 0 00-19.662 19.662A25.336 25.336 0 000 19.663 25.336 25.336 0 0019.663 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector161Icon;
/* prettier-ignore-end */

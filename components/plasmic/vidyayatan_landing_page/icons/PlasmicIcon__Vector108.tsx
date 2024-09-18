// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector108IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector108Icon(props: Vector108IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 26"}
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
          "M32.376 0c.342 2.496.372 5.106.054 7.686-1.5 12.186-9.096 20.43-20.754 16.302C7.128 25.602 3.192 25.326 0 23.67L32.376.006V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector108Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector78IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector78Icon(props: Vector78IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 3"}
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
          "M0 1.276a4.334 4.334 0 005.01.348C4.686.73 3.72.058 2.544.004 1.428-.05.444.478 0 1.276z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector78Icon;
/* prettier-ignore-end */

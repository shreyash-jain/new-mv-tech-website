// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector82Icon(props: Vector82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1036 286"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 284l135-13.5 99.5-72.5 145-107.5 170-72.5 485-16"}
        stroke={"currentColor"}
        strokeWidth={"3"}
      ></path>
    </svg>
  );
}

export default Vector82Icon;
/* prettier-ignore-end */

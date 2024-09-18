// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle6Icon(props: Rectangle6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 287 187"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 4.504A4.504 4.504 0 014.504 0h277.101a4.504 4.504 0 014.504 4.504v182.194H0V4.504z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle6Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector96IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector96Icon(props: Vector96IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 16"}
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
          "M0 15.564h8.04c.264 0 .516-.042.756-.114.396-1.542 1.164-5.646 1.848-9.456V0L5.412 6.732l-1.734 4.872-3.672 3.96H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector96Icon;
/* prettier-ignore-end */

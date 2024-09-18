// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector124IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector124Icon(props: Vector124IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.498.996A.5.5 0 00.996.498.5.5 0 00.498 0 .5.5 0 000 .498a.5.5 0 00.498.498z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector124Icon;
/* prettier-ignore-end */

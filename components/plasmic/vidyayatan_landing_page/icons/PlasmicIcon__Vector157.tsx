// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector157IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector157Icon(props: Vector157IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.16 0a11.816 11.816 0 009.16 9.16 11.816 11.816 0 00-9.16 9.16A11.816 11.816 0 000 9.16 11.816 11.816 0 009.16 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector157Icon;
/* prettier-ignore-end */

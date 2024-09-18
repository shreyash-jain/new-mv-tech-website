// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector49Icon(props: Vector49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.001 0s3.365 1.077 3.574 1.731c.25.781-1.902 2.514-1.902 2.514S.06-.025 0 0h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector49Icon;
/* prettier-ignore-end */

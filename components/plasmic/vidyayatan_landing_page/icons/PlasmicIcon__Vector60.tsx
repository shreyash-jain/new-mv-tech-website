// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector60Icon(props: Vector60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 26"}
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
          "M0 25.437L4.884 5.805s.672-2.25 3.258-3.354S22.65.057 22.65.057s3.066-.48 4.98 1.344c1.914 1.818 8.478 13.644 8.478 13.644L.006 25.437H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector60Icon;
/* prettier-ignore-end */

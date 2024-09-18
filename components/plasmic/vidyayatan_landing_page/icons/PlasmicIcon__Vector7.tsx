// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 368 357"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".1"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M212.123.322c55.151-4.767 101.305 44.185 132.7 90.68 26.375 39.061 24.449 88.15 19.925 135.354-3.96 41.313-11.908 85.155-43.56 111.246-29.646 24.436-70.969 13.296-109.065 14.559-40.384 1.34-81.467 13.637-116.396-7.081C50.585 318.306-.998 279.61.015 226.356c1.01-53.084 64.149-75.85 100.141-114.206C137.704 72.137 158.015 5 212.123.322z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */

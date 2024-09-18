// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector109IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector109Icon(props: Vector109IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 42"}
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
          "M5.649 37.723C-2.541 27.853-3.213-.15 13.017 0c15.78-.144 15.588 26.304 8.04 36.852-3.828 5.352-11.106 6.06-15.408.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector109Icon;
/* prettier-ignore-end */

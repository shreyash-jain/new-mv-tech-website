// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector142IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector142Icon(props: Vector142IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 359 350"}
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
          "M246.112 0c68.046 0 112.179 65.284 112.179 133.33 0 95.283-16.896 216.67-112.179 216.67C118.06 350 0 261.382 0 133.33 0 24.02 136.801 0 246.112 0z"
        }
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Vector142Icon;
/* prettier-ignore-end */

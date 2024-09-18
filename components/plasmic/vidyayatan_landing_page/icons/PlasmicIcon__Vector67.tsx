// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector67Icon(props: Vector67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M0 8.178V0s10.344.93 15.498 1.416v11.166l-.45.348L0 8.172v.006z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector67Icon;
/* prettier-ignore-end */

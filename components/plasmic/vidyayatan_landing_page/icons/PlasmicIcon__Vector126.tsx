// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector126IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector126Icon(props: Vector126IconProps) {
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
        d={"M.498.996A.497.497 0 10.5.002a.497.497 0 00-.002.994z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector126Icon;
/* prettier-ignore-end */

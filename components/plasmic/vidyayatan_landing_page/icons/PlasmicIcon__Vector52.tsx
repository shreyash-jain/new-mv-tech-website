// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector52Icon(props: Vector52IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.676.001l2.652 6.805a1.784 1.784 0 01-1.089 2.337c-.242.082-.505.17-.785.257A14.727 14.727 0 011.429 6.514 4.116 4.116 0 01.245 1.999l.19-.529 1.622.025S4.85 4.49 6.301 4.059C7.75 3.627 9.627 1.286 14.676 0v.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector52Icon;
/* prettier-ignore-end */

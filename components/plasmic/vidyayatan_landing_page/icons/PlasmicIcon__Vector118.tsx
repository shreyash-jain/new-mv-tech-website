// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector118IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector118Icon(props: Vector118IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M3.24 3.306H0V.66C0 .294.3 0 .66 0h1.914c.366 0 .66.3.66.66v2.646h.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector118Icon;
/* prettier-ignore-end */

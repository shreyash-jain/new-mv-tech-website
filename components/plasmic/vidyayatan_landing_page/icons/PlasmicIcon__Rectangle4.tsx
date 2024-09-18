// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle4Icon(props: Rectangle4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 358 234"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 5.63A5.63 5.63 0 015.63 0h346.376a5.63 5.63 0 015.63 5.63v227.742H0V5.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle4Icon;
/* prettier-ignore-end */

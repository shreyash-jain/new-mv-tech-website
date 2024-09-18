// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame4Icon(props: Frame4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.375 4.781a3.094 3.094 0 116.187 0 3.094 3.094 0 01-6.187 0zm7.312 1.688a2.531 2.531 0 115.063 0 2.531 2.531 0 01-5.063 0zm-9.562 7.875a5.344 5.344 0 1110.687 0v.092a.561.561 0 01-.273.472 9.8 9.8 0 01-5.07 1.405 9.797 9.797 0 01-5.07-1.405.563.563 0 01-.273-.473l-.001-.091zm11.812.002v.108c-.005.25-.064.496-.175.72 1.31.08 2.617-.18 3.795-.758a.562.562 0 00.315-.482 3.656 3.656 0 00-5.218-3.458 6.44 6.44 0 011.283 3.868v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame31Icon(props: Frame31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16 3a13 13 0 1013 13A13.013 13.013 0 0016 3zm7 14h-7a1 1 0 01-1-1V9a1 1 0 012 0v6h6a1 1 0 010 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame31Icon;
/* prettier-ignore-end */

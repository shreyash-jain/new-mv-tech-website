// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector158IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector158Icon(props: Vector158IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.958 0a23.19 23.19 0 0017.957 17.957 23.19 23.19 0 00-17.957 17.958A23.19 23.19 0 000 17.958 23.19 23.19 0 0017.958 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector158Icon;
/* prettier-ignore-end */

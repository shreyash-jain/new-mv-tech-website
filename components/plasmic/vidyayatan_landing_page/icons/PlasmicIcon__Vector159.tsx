// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector159IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector159Icon(props: Vector159IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.244 0a15.826 15.826 0 0012.244 12.244 15.826 15.826 0 00-12.244 12.244A15.826 15.826 0 000 12.244 15.826 15.826 0 0012.244 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector159Icon;
/* prettier-ignore-end */

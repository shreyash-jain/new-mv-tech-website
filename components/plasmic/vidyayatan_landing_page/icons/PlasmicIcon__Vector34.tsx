// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector34Icon(props: Vector34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.903 13.806A6.911 6.911 0 010 6.903 6.911 6.911 0 016.903 0a6.911 6.911 0 016.903 6.903 6.911 6.911 0 01-6.903 6.903zm0-13.204a6.308 6.308 0 00-6.3 6.301c0 3.474 2.826 6.3 6.3 6.3 3.474 0 6.3-2.826 6.3-6.3 0-3.474-2.826-6.3-6.3-6.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */

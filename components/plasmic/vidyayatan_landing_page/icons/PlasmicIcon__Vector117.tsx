// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector117IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector117Icon(props: Vector117IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.032 0h1.812c.57 0 1.032.462 1.032 1.032v2.646c0 .57-.462 1.032-1.032 1.032H1.032C.462 4.71 0 4.248 0 3.678V1.032C0 .462.462 0 1.032 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector117Icon;
/* prettier-ignore-end */

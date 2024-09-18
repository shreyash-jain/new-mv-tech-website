// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector79IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector79Icon(props: Vector79IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 2"}
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
          "M6.748.06L.022 0c-.114.744.222 1.494.72 1.668.606.204 5.478.12 5.826-.258.168-.186.192-.78.18-1.344V.06z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector79Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector149IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector149Icon(props: Vector149IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 219 113"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M89.19 112.189L0 0l218.665 52.367L89.189 112.19z"}
        fill={"currentColor"}
        opacity={".44"}
      ></path>
    </svg>
  );
}

export default Vector149Icon;
/* prettier-ignore-end */

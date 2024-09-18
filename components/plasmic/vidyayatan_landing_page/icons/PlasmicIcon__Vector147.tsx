// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector147IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector147Icon(props: Vector147IconProps) {
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
        d={"M129.494 0l89.171 112.171L0 59.822 129.494 0z"}
        fill={"currentColor"}
        opacity={".44"}
      ></path>
    </svg>
  );
}

export default Vector147Icon;
/* prettier-ignore-end */

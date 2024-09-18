// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector174IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector174Icon(props: Vector174IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 125 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M124.76 0H0v4.861h124.76V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Vector174Icon;
/* prettier-ignore-end */

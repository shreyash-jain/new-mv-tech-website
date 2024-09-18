// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector51Icon(props: Vector51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M.014 3.29a3 3 0 105.972-.58 3 3 0 00-5.972.58z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector51Icon;
/* prettier-ignore-end */

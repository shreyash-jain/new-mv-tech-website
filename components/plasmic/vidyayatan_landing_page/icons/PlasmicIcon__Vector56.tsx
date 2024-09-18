// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector56Icon(props: Vector56IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 130 130"}
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
          "M64.8 129.6c35.688 0 64.8-29.106 64.8-64.8C129.6 29.106 100.494 0 64.8 0 29.106 0 0 29.106 0 64.8c0 35.694 29.106 64.8 64.8 64.8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector56Icon;
/* prettier-ignore-end */

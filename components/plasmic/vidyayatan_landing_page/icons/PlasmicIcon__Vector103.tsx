// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector103IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector103Icon(props: Vector103IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
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
          "M14.124 28.248c7.776 0 14.124-6.342 14.124-14.124C28.248 6.342 21.906 0 14.124 0 6.342 0 0 6.342 0 14.124c0 7.782 6.342 14.124 14.124 14.124z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector103Icon;
/* prettier-ignore-end */

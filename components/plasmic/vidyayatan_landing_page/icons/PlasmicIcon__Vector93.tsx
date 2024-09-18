// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector93IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector93Icon(props: Vector93IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 16"}
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
          "M57.804 1.02c.546 5.892 1.17 11.286 1.644 14.298L.366 11.112 0 9.492c.222-1.896.444-4.02.666-6.246L8.832 0S46.206.666 57.81 1.02h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector93Icon;
/* prettier-ignore-end */

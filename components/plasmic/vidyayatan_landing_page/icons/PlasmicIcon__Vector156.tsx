// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector156IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector156Icon(props: Vector156IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.909 0c.834 3.972 3.936 7.092 7.908 7.909-3.972.834-7.092 3.936-7.908 7.908C7.074 11.845 3.972 8.725 0 7.91 3.972 7.074 7.092 3.972 7.909 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector156Icon;
/* prettier-ignore-end */

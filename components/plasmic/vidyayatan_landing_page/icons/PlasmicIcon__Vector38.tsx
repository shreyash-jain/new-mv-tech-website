// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector38Icon(props: Vector38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.673 2.704a.302.302 0 01-.23-.105c-.39-.459-.52-.839-.397-1.164.086-.224.26-.328.415-.418C.56.96.664.898.773.795a1.43 1.43 0 00.367-.59.302.302 0 01.383-.19.302.302 0 01.188.383c-.113.332-.29.614-.524.835-.159.15-.31.24-.421.303-.08.047-.148.088-.158.115-.02.055.017.234.293.558a.301.301 0 01-.23.497l.002-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector38Icon;
/* prettier-ignore-end */

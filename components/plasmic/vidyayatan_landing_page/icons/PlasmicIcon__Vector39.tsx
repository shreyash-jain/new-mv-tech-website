// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector39Icon(props: Vector39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.798 3.595L4.242 6.151 0 4.281c.35-.63.984-1.586 2.053-2.445C4.004.27 6.098.075 6.7.027c3.386-.27 7.033 1.508 8.558 4.499a7.7 7.7 0 01.635 1.858c.94 4.412-2.418 10.06-4.108 9.975-.527-.026-1.014-1.184-2.25-7.873-1.442-.637-2.885-1.273-4.328-1.908l1.59-2.981.002-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector39Icon;
/* prettier-ignore-end */

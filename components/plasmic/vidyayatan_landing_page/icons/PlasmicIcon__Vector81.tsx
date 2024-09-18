// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector81IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector81Icon(props: Vector81IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M1.218 0c.672 0 1.218.546 1.218 1.218v1.59c0 .672-.546 1.218-1.218 1.218A1.223 1.223 0 010 2.808v-1.59C0 .546.546 0 1.218 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector81Icon;
/* prettier-ignore-end */

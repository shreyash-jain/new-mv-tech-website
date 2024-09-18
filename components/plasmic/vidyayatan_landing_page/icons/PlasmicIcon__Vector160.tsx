// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector160IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector160Icon(props: Vector160IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.038 0c.744 3.537 3.5 6.312 7.038 7.038-3.537.744-6.313 3.5-7.038 7.038-.744-3.537-3.5-6.313-7.038-7.038C3.537 6.294 6.312 3.538 7.038 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector160Icon;
/* prettier-ignore-end */

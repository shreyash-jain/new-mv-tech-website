// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame42Icon(props: Frame42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23 11.196V10.5C23 7.365 18.271 5 12 5S1 7.365 1 10.5v5c0 2.611 3.281 4.686 8 5.308v.692c0 3.135 4.729 5.5 11 5.5s11-2.365 11-5.5v-5c0-2.588-3.177-4.665-8-5.304zM7 18.36c-2.449-.684-4-1.81-4-2.859v-1.759c1.02.723 2.386 1.305 4 1.697v2.92zm10-2.922c1.614-.39 2.98-.973 4-1.696V15.5c0 1.049-1.551 2.175-4 2.859v-2.922zm-2 8.922c-2.449-.684-4-1.81-4-2.859v-.521a24.068 24.068 0 002.424-.023 15.23 15.23 0 001.576.47v2.933zm0-5.578a20.35 20.35 0 01-3 .219 20.366 20.366 0 01-3-.219v-2.973c.995.13 1.997.193 3 .192a22.973 22.973 0 003-.193v2.974zm8 6c-1.99.292-4.01.292-6 0V21.8a22.973 22.973 0 006 .008v2.973zm6-3.281c0 1.049-1.551 2.175-4 2.859v-2.922c1.614-.39 2.98-.973 4-1.696V21.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame42Icon;
/* prettier-ignore-end */

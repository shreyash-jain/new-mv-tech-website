// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame28Icon(props: Frame28IconProps) {
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
          "M26.5 9.5V9a5.5 5.5 0 00-9.358-3.914.492.492 0 00-.142.35v11.09a.5.5 0 00.775.416A5.959 5.959 0 0120.96 16a1.022 1.022 0 011.039.948 1 1 0 01-1 1.052 4 4 0 00-4 4v4.235a.498.498 0 00.186.39 5.99 5.99 0 009.276-2.145.5.5 0 00-.561-.695A8.507 8.507 0 0124 24h-.966a1.022 1.022 0 01-1.031-.934 1 1 0 011-1.066h1A6.5 6.5 0 0026.5 9.5zM25 14h-.5A4.5 4.5 0 0120 9.5V9a1 1 0 012 0v.5a2.5 2.5 0 002.5 2.5h.5a1 1 0 010 2zM11 3.5A5.506 5.506 0 005.5 9v.5A6.5 6.5 0 005 21.265 6.45 6.45 0 008 22h.966a1.023 1.023 0 011.034.934A1 1 0 019 24H8c-.64 0-1.278-.072-1.901-.216a.5.5 0 00-.563.694 5.991 5.991 0 009.278 2.147.5.5 0 00.186-.39V22a4 4 0 00-4-4 1 1 0 01-1-1.052A1.022 1.022 0 0111.04 16a5.959 5.959 0 013.185.942.5.5 0 00.775-.416V5.436a.5.5 0 00-.143-.351A5.481 5.481 0 0011 3.5zm1 6A4.5 4.5 0 017.5 14H7a1 1 0 010-2h.5A2.5 2.5 0 0010 9.5V9a1 1 0 012 0v.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame28Icon;
/* prettier-ignore-end */

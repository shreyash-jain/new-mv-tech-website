// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame2Icon(props: Frame2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.375 14v8.75A4.375 4.375 0 0121 27.125h-6.125a.875.875 0 110-1.75H21a2.625 2.625 0 002.625-2.625H21a2.625 2.625 0 01-2.625-2.625V15.75A2.625 2.625 0 0121 13.125h2.587A9.625 9.625 0 007.219 7.168a9.547 9.547 0 00-2.805 5.957H7a2.625 2.625 0 012.625 2.625v4.375A2.625 2.625 0 017 22.75H5.25a2.625 2.625 0 01-2.625-2.625V14a11.387 11.387 0 0119.457-8.02A11.31 11.31 0 0125.375 14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */

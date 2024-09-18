// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame23Icon(props: Frame23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 1.875A10.125 10.125 0 1022.125 12 10.137 10.137 0 0012 1.875zm0 18A7.875 7.875 0 1119.875 12 7.883 7.883 0 0112 19.875zm4.125-6a3 3 0 01-3 3v.375a1.125 1.125 0 11-2.25 0v-.375H9.75a1.125 1.125 0 110-2.25h3.375a.75.75 0 100-1.5h-2.25a3 3 0 010-6V6.75a1.125 1.125 0 112.25 0v.375h1.125a1.125 1.125 0 010 2.25h-3.375a.75.75 0 100 1.5h2.25a3 3 0 013 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame23Icon;
/* prettier-ignore-end */

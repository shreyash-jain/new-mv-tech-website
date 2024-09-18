// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame40Icon(props: Frame40IconProps) {
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
          "M28 9h-2V8a3 3 0 00-3-3H5a3 3 0 00-3 3v12a3 3 0 003 3h14v1a3 3 0 003 3h6a3 3 0 003-3V12a3 3 0 00-3-3zm1 15a1 1 0 01-1 1h-6a1 1 0 01-1-1V12a1 1 0 011-1h6a1 1 0 011 1v12zm-12 2a1 1 0 01-1 1h-5a1 1 0 010-2h5a1 1 0 011 1zm10-12a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame40Icon;
/* prettier-ignore-end */

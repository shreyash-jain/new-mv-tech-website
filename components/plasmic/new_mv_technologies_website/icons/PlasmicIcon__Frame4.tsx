// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame4Icon(props: Frame4IconProps) {
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
          "M22.75 3.5H5.25A1.75 1.75 0 003.5 5.25v17.5a1.75 1.75 0 001.75 1.75h17.5a1.75 1.75 0 001.75-1.75V5.25a1.75 1.75 0 00-1.75-1.75zM9.88 12.506a.875.875 0 011.24 0l2.005 2.007V7.875a.875.875 0 011.75 0v6.638l2.006-2.007a.875.875 0 011.238 1.238l-3.5 3.5a.876.876 0 01-1.238 0l-3.5-3.5a.876.876 0 010-1.238zM22.75 22.75H5.25v-4.375h3.138l2.112 2.113a1.738 1.738 0 001.237.512h4.526a1.735 1.735 0 001.237-.513l2.112-2.112h3.138v4.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame4Icon;
/* prettier-ignore-end */

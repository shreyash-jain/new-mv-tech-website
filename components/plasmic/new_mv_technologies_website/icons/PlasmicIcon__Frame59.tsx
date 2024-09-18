// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame59Icon(props: Frame59IconProps) {
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
          "M30 10v15a1 1 0 01-1 1h-9a3 3 0 00-3 2.992.988.988 0 01-.64.944A.999.999 0 0115 29a3 3 0 00-3-3H3a1 1 0 01-1-1V10a1 1 0 011-1h8a4 4 0 014 4v7.966a1.022 1.022 0 00.934 1.031 1 1 0 001.066-1V13a4 4 0 014-4h8a1 1 0 011 1zM11.101 7h.024a5.99 5.99 0 014.5 2.175.5.5 0 00.76 0A5.99 5.99 0 0120.875 7h.024a.5.5 0 00.442-.73 6 6 0 00-10.682 0A.5.5 0 0011.1 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame59Icon;
/* prettier-ignore-end */

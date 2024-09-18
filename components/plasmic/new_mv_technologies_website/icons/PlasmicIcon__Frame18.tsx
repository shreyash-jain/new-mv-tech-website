// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame18Icon(props: Frame18IconProps) {
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
          "M20.555 13.168l-6-4A1 1 0 0013 10v8a1 1 0 001.555.832l6-4a1 1 0 000-1.665zM15 16.13v-4.256L18.198 14 15 16.131zM27 5H5a2 2 0 00-2 2v14a2 2 0 002 2h22a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H5V7h22v14zm2 5a1 1 0 01-1 1H4a1 1 0 010-2h24a1 1 0 011 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame18Icon;
/* prettier-ignore-end */

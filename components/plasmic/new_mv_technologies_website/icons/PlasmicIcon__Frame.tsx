// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
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
          "M11 13.914l6 6V27.5a.5.5 0 01-.5.5H6a2 2 0 01-2-2V6a2 2 0 012-2h2.5a.5.5 0 01.5.5v14.672a3 3 0 102 0v-5.258zM10 23a1 1 0 100-2 1 1 0 000 2zm13-10a1 1 0 10-2 0 1 1 0 002 0zm3-9h-6.5a.5.5 0 00-.5.5v4.086l1.707 1.708a3 3 0 11-1.413 1.413l-2-2A1 1 0 0117 9V4.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v6.586l7.707 7.707A1.001 1.001 0 0119 19.5v8a.5.5 0 00.5.5H26a2 2 0 002-2V6a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */

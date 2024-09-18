// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector61Icon(props: Vector61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 16.83L2.598 6.39C6.264 4.766 10.44 3.33 14.94 2.22 21.174.686 27.186-.03 32.406 0a305.647 305.647 0 013.696 6.439L0 16.83z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector61Icon;
/* prettier-ignore-end */

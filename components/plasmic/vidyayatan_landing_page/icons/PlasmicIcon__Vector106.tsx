// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector106IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector106Icon(props: Vector106IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 28"}
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
          "M0 26.724c3.324.606 7.134.456 11.364-.654 14.766 3.87 24.396-3.858 26.292-15.276.612-3.702.21-7.464-1.092-10.794L0 26.724z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector106Icon;
/* prettier-ignore-end */

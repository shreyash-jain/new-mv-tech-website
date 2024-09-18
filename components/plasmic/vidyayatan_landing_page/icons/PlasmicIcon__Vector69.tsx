// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector69IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector69Icon(props: Vector69IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 71"}
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
          "M28.6.006c-4.21 1.872-5.266 3.042-11.35 15.912-6.084 12.87-10.53 24.108-10.53 24.108s-3.102 1.344-3.684 2.808c-.588 1.464-.12 4.68-.12 4.68S-.95 52.194.22 57.696c1.17 5.502 6.024 11.934 7.488 12.696 1.464.762 5.382 0 5.382 0s16.44-9.186 20.184-19.02C37.019 41.544 39.827 7.14 28.595 0l.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector69Icon;
/* prettier-ignore-end */

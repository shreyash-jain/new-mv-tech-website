// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector143IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector143Icon(props: Vector143IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 299 350"}
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
          "M148.576 2.206c46.675-7.039 100.945 1.963 130.612 38.677 28.478 35.243 5.059 85.316 6.182 130.613 1.179 47.547 29.618 99.678.459 137.253-30.314 39.064-88.245 45.592-137.253 39.024-43.57-5.839-76.494-37.842-104.814-71.463C18.414 246.216-1.553 210.807.095 171.496c1.59-37.932 27.068-67.838 52.102-96.38 27.613-31.483 54.97-66.665 96.379-72.91z"
        }
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Vector143Icon;
/* prettier-ignore-end */

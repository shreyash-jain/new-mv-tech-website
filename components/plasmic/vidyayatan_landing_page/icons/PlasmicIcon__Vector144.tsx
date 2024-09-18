// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector144IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector144Icon(props: Vector144IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 301 350"}
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
          "M140.765 1.35c45.131 6.452 68.754 52.675 98.475 87.245 26.191 30.464 60.189 58.312 61.191 98.474 1.019 40.795-27.385 74.57-56.149 103.517-28.883 29.068-62.779 52.745-103.517 57.17-45.697 4.963-100.813 4.564-128.745-31.941-27.138-35.467 6.237-84.09 5.793-128.746-.452-45.598-33.547-93.304-8.375-131.326C36.63 14.67 92.004-5.62 140.765 1.35z"
        }
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Vector144Icon;
/* prettier-ignore-end */

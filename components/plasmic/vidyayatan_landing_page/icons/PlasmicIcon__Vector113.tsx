// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector113IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector113Icon(props: Vector113IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 231 233"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M137.05 1.27c18.084 3.36 34.71 10.872 48.852 21.516m38.91 51.312a116.005 116.005 0 015.118 16.878m-.612 53.742c-1.482 6-6.186 20.238-11.13 27.42m-56.022 51.966a116.19 116.19 0 01-23.742 7.416m-46.002-.024a116.356 116.356 0 01-33.108-12.042M5.626 157.54A116.302 116.302 0 011 141.874m.516-52.926c1.5-6.21 3.486-12.228 5.934-18.006m50.394-56.526A116.415 116.415 0 0195.434 1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.278"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector113Icon;
/* prettier-ignore-end */

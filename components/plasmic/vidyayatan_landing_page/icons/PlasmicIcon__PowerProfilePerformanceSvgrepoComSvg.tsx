// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PowerProfilePerformanceSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PowerProfilePerformanceSvgrepoComSvgIcon(
  props: PowerProfilePerformanceSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 1.004c-2.05 0-4.098.781-5.656 2.34-3.117 3.117-3.117 8.195 0 11.312a1 1 0 101.414-1.414 5.984 5.984 0 010-8.484 5.984 5.984 0 018.484 0 5.982 5.982 0 010 8.484 1 1 0 101.414 1.414c3.117-3.117 3.117-8.195 0-11.312A7.973 7.973 0 008 1.004zm5.195 11l-.363-1.363L10 9.004c0-.715-.383-1.371-1-1.73a2.002 2.002 0 00-2 3.464 2.001 2.001 0 001.996-.004l2.836 1.637zm0 0"
        }
        fill={"#fff"}
      ></path>

      <path
        d={
          "M12 9a4.003 4.003 0 01-1.18 2.82l2.13 2.13A7.002 7.002 0 0015 9zm0 0"
        }
        fill={"#c4c4c4"}
        fillOpacity={".349"}
      ></path>
    </svg>
  );
}

export default PowerProfilePerformanceSvgrepoComSvgIcon;
/* prettier-ignore-end */

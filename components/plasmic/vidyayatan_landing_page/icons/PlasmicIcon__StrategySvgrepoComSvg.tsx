// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StrategySvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StrategySvgrepoComSvgIcon(
  props: StrategySvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 3H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zM5.293 8.707a1 1 0 111.414-1.414l.793.793.793-.793a1 1 0 111.414 1.414l-.793.793.793.793a1 1 0 01-1.414 1.414l-.793-.793-.793.793a1 1 0 01-1.414-1.414l.793-.793zM19 14a1 1 0 01-2 0v-1.586l-.192.192A14.9 14.9 0 016.2 17H6a1 1 0 010-2h.2a12.916 12.916 0 009.193-3.808l.193-.192H14a1 1 0 010-2h4a1 1 0 011 1z"
        }
      ></path>
    </svg>
  );
}

export default StrategySvgrepoComSvgIcon;
/* prettier-ignore-end */

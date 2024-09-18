// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AiSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AiSvgrepoComSvgIcon(props: AiSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      version={"1.1"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M384 128v256H128V128h256zm-148.25 64h-24.932l-47.334 128h22.493l8.936-25.023h56.662L260.32 320h23.847L235.75 192zm88.344 0h-22.402v128h22.402V192zm-101 21.475l22.315 63.858h-44.274l21.96-63.858zM405.335 320H448v42.667h-42.667V320zm-256 85.333H192V448h-42.667v-42.667zm85.333 0h42.666V448h-42.666v-42.667zM149.333 64H192v42.667h-42.667V64zM320 405.333h42.667V448H320v-42.667zM234.667 64h42.666v42.667h-42.666V64zM320 64h42.667v42.667H320V64zm85.333 170.667H448v42.666h-42.667v-42.666zM64 320h42.667v42.667H64V320zm341.333-170.667H448V192h-42.667v-42.667zM64 234.667h42.667v42.666H64v-42.666zm0-85.334h42.667V192H64v-42.667z"
        }
        fill={"#fafafa"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default AiSvgrepoComSvgIcon;
/* prettier-ignore-end */

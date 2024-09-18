// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame13Icon(props: Frame13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21 4.5H3a.75.75 0 00-.75.75V18a1.5 1.5 0 001.5 1.5h16.5a1.5 1.5 0 001.5-1.5V5.25A.75.75 0 0021 4.5zm-9 7.983L4.928 6h14.144L12 12.483zM9.254 12L3.75 17.045V6.955L9.254 12zm1.11 1.017l1.125 1.036a.75.75 0 001.014 0l1.125-1.036L19.066 18H4.928l5.436-4.983zM14.746 12l5.504-5.046v10.092L14.746 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame13Icon;
/* prettier-ignore-end */

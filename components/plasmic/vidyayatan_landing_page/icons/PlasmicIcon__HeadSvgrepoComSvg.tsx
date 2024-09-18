// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeadSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeadSvgrepoComSvgIcon(props: HeadSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M475.606 295.503L434.2 207.722c.109-2.625.203-5.25.203-7.906C434.403 89.472 344.934.003 234.575.003S34.747 89.472 34.747 199.815c0 62.063 28.281 117.516 72.672 154.172v70.625c0 6.891 4.109 13.125 10.453 15.813l165.5 70.203a17.164 17.164 0 0016.172-1.469 17.174 17.174 0 007.703-14.313v-59.859c0-9.469 7.688-17.172 17.156-17.172h84.766c9.484 0 17.156-7.688 17.156-17.156V349.05a17.199 17.199 0 019.672-15.453l31.578-15.328c8.469-4.125 12.047-14.266 8.031-22.766z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeadSvgrepoComSvgIcon;
/* prettier-ignore-end */

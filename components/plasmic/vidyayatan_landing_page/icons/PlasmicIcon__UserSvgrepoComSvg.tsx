// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserSvgrepoComSvgIcon(props: UserSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1m-7-8a4 4 0 100-8 4 4 0 000 8z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default UserSvgrepoComSvgIcon;
/* prettier-ignore-end */

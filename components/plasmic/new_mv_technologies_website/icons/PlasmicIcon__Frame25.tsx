// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame25Icon(props: Frame25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27 5H5a2 2 0 00-2 2v18a2 2 0 002 2h22a2 2 0 002-2V7a2 2 0 00-2-2zm0 2v4H5V7h22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame25Icon;
/* prettier-ignore-end */

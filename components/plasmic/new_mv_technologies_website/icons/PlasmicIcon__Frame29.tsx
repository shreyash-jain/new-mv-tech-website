// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame29Icon(props: Frame29IconProps) {
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
          "M25 4h-4.532a5.99 5.99 0 00-8.935 0H7a2 2 0 00-2 2v21a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm-9 0a4 4 0 014 4h-8a4 4 0 014-4zm4 16h-8a1 1 0 010-2h8a1 1 0 010 2zm0-4h-8a1 1 0 010-2h8a1 1 0 010 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame29Icon;
/* prettier-ignore-end */

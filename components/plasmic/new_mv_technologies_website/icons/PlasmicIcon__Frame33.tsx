// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame33Icon(props: Frame33IconProps) {
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
          "M27 5H5a2 2 0 00-2 2v18a2 2 0 002 2h22a2 2 0 002-2V7a2 2 0 00-2-2zM11.6 18.2a1 1 0 11-1.2 1.6l-4-3a1 1 0 010-1.6l4-3a1 1 0 111.2 1.6L8.666 16l2.934 2.2zm7.361-8.925l-4 14a1 1 0 11-1.922-.55l4-14a1 1 0 011.922.55zM25.6 16.8l-4 3a1 1 0 01-1.2-1.6l2.934-2.2-2.934-2.2a1 1 0 111.2-1.6l4 3a.999.999 0 010 1.6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame33Icon;
/* prettier-ignore-end */

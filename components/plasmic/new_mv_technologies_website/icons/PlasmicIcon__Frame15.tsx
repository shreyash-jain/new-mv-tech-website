// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame15Icon(props: Frame15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.25 13.125a.875.875 0 01-.875.875h-3.5v3.5h.875a1.75 1.75 0 011.75 1.75v3.5a1.75 1.75 0 01-1.75 1.75h-3.5a1.75 1.75 0 01-1.75-1.75v-3.5a1.75 1.75 0 011.75-1.75h.875V14H7.875v3.5h.875a1.75 1.75 0 011.75 1.75v3.5a1.75 1.75 0 01-1.75 1.75h-3.5a1.75 1.75 0 01-1.75-1.75v-3.5a1.75 1.75 0 011.75-1.75h.875V14h-3.5a.875.875 0 010-1.75h10.5V9.625h-.875a1.75 1.75 0 01-1.75-1.75v-3.5a1.75 1.75 0 011.75-1.75h3.5a1.75 1.75 0 011.75 1.75v3.5a1.75 1.75 0 01-1.75 1.75h-.875v2.625h10.5a.875.875 0 01.875.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame15Icon;
/* prettier-ignore-end */

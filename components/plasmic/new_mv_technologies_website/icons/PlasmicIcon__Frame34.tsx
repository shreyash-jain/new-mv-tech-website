// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame34Icon(props: Frame34IconProps) {
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
          "M29 26a1 1 0 01-1 1H4a1 1 0 010-2h1v-8a1 1 0 011-1h3a1 1 0 011 1v8h2V11a1 1 0 011-1h4a1 1 0 011 1v14h2V5a1 1 0 011-1h5a1 1 0 011 1v20h1a1 1 0 011 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame34Icon;
/* prettier-ignore-end */

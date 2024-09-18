// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame21Icon(props: Frame21IconProps) {
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
          "M29.061 10.061l-16 16a1.501 1.501 0 01-2.125 0l-7-7a1.503 1.503 0 012.125-2.125L12 22.875 26.939 7.939a1.503 1.503 0 012.125 2.125l-.003-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame21Icon;
/* prettier-ignore-end */

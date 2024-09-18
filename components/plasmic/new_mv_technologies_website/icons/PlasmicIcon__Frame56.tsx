// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame56IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame56Icon(props: Frame56IconProps) {
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
          "M30 16v8a1 1 0 01-1 1h-8a1 1 0 01-.707-1.707L23.585 20 17 13.414l-4.293 4.293a1.001 1.001 0 01-1.415 0l-9-9a1 1 0 111.416-1.415L12 15.587l4.293-4.293a1.001 1.001 0 011.415 0L25 18.585l3.293-3.293A1 1 0 0130 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame56Icon;
/* prettier-ignore-end */

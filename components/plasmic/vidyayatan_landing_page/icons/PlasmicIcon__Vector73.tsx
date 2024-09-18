// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector73IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector73Icon(props: Vector73IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.243.013c-.12.018-.24.036-.36.06A4.885 4.885 0 00.001 4.765a4.897 4.897 0 004.8 4.986 4.9 4.9 0 004.986-4.8 4.884 4.884 0 00-1.818-3.9c.126 1.446-.108 3.234-1.95 3.408l.054-2.82C6.097.5 5.029-.029 4.249.001l-.006.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector73Icon;
/* prettier-ignore-end */
